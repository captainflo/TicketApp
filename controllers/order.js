const Order = require('../models/Order');
const Ticket = require('../models/Ticket');
// Create Order
exports.createOrder = async function (req, res, next) {
  const { ticket, userId } = req.body.valueForm;

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
