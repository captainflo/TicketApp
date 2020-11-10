const Ticket = require('../controllers/ticket');

module.exports = (app) => {
  // Create Ticket
  app.post('/api/ticket/new', Ticket.createTicket);

  // Fetch All Tickets
  app.get('/api/tickets', Ticket.fetchAllTickets);

  // Fetch Ticket
  app.get('/api/ticket/:id', Ticket.fetchTicket);

  // Delete Ticket
  app.delete('/api/ticket/:id', Ticket.deleteTicket);

  // Update Ticket
  app.post('/api/ticket/:id', Ticket.updateTicket);
};
