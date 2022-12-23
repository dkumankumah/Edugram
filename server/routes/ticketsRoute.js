const express = require('express')
const Ticket = require("../models/ticketsModal");
const router = express.Router()
const ticketList = require('../controllers/ticketsController');

module.exports = function(app) {
  // Tasks List Routes
  app.route('/tickets')
    .get(ticketList.getTickets)
    .post(ticketList.createTicket);

  app.route('/tickets/:ticketId')
    .get(ticketList.getTaskById)
    .put(ticketList.editTaskById)
    .delete(ticketList.deleteTaskById);
};

// router.get('/', async (req, res) => {
//   try {
//     const tickets = await Ticket.find()
//     res.json(tickets);
//   } catch (err) {
//     res.status(500).json({message: err})
//   }
// });
//
//
// module.exports = router;
