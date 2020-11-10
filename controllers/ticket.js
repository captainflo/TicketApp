const Ticket = require('../models/Ticket');

// Create Ticket
exports.createTicket = async function (req, res, next) {
  const { title, price, userId, date, address, photo } = req.body;

  const ticket = new Ticket({
    title: title,
    price: price,
    userId: userId,
    date: date,
    address: address,
    photo:
      photo ||
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-heart-with-headphones-on-blue-background-royalty-free-image-1575655505.jpg',
  });

  await ticket.save(function (error, ticket) {
    if (error) {
      return next(error);
    }
    res.status(201).send(ticket);
  });
};

// Fetch All Tickets
exports.fetchAllTickets = async function (req, res, next) {
  const ticket = await Ticket.find({});

  if (!ticket) {
    res.send('No ticket found...');
  }
  res.status(201).send(ticket);
};

// Fetch Ticket
exports.fetchTicket = async function (req, res, next) {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.send({ error: 'nothing found' });
  }
  if (!ticket) {
    res.send('No ticket found...');
  }
  res.send(ticket);
};

// Update Ticket
exports.updateTicket = async function (req, res, next) {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.send({ error: 'nothing found' });
  }

  ticket.set(req.body);

  await ticket.save();
  res.status(200).send(ticket);
};

// Delete Ticket
exports.deleteTicket = function (req, res, next) {
  Ticket.findByIdAndRemove(req.params.id)
    .then(function (user) {
      res.json(user);
    })
    .catch(function (err) {
      res.json(err);
    });
};
