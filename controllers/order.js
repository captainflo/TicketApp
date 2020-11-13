const Order = require('../models/Order');
const Ticket = require('../models/Ticket');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretkey);

// Create Order
exports.createOrder = async function (req, res, next) {
  console.log(req.body.valueForm);
  const { ticket, userId, token } = req.body.valueForm;

  const charge = await stripe.charges.create({
    currency: 'usd',
    description: 'Ticket App',
    amount: ticket.price * 100,
    source: token,
  });
  if (charge) {
    const order = new Order({
      userId: userId,
      ticket: ticket._id,
    });

    await order.save(async function (error, order) {
      // update Ticket OrderId
      const ticketUpdated = await Ticket.findById(ticket._id);
      ticketUpdated.set({ orderId: order._id });
      await ticketUpdated.save();
      res.status(201).send(order);
    });
  }
};

// Fetch Orders by UserId
exports.fetchAllOrdersByUserId = async function (req, res, next) {
  console.log(req.body.userId);
  const orders = await Order.find({ userId: req.body.userId }).populate(
    'ticket'
  );
  if (!orders) {
    res.send({ error: 'no Orders found' });
  }
  res.send(orders);
};
