const Order = require('../models/Order');
const Ticket = require('../models/Ticket');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretkey);
const sgMail = require('@sendgrid/mail');
const templateEmail = require('../services/templateEmail');

// Create Order
exports.createOrder = async function (req, res, next) {
  console.log(req.body);
  const { ticket, user, token } = req.body.valueForm;

  // Stripe Payment
  const charge = await stripe.charges.create({
    currency: 'usd',
    description: 'Ticket App',
    amount: ticket.price * 100,
    source: token,
  });

  if (charge) {
    const order = new Order({
      userId: user._id,
      ticket: ticket._id,
    });

    await order.save(async function (error, order) {
      // update Ticket OrderId
      const ticketUpdated = await Ticket.findById(ticket._id);
      ticketUpdated.set({ orderId: order._id });
      await ticketUpdated.save();

      // Send Email
      sgMail.setApiKey(keys.sendGrid);
      let msg = {
        to: `${user.email}`,
        from: 'flahitte@outlook.com',
        subject: `${user.firstName} your E-Ticket from TicketApp`,
        html: templateEmail(req.body.valueForm),
      };
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }

      res.status(201).send(order);
    });
  }
};

// Fetch Orders by UserId
exports.fetchAllOrdersByUserId = async function (req, res, next) {
  const orders = await Order.find({ userId: req.body.userId }).populate(
    'ticket'
  );
  if (!orders) {
    res.send({ error: 'no Orders found' });
  }
  res.send(orders);
};
