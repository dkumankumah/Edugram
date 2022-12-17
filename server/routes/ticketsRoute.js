const express = require('express')
const Ticket = require("../models/ticketsModal");
const router = express.Router()
const ticketList = require('../controllers/ticketsController');
const ticketController = require('../controllers/ticketsController');

router.get("/tickets", ticketController.getTickets);
router.post("/tickets", ticketController.createTicket);

module.exports = function (app) {
  // Tasks List Routes
  // app.route('/tickets')
  //   .get(ticketList.getTickets)
  //   .post(ticketList.createTicket);

  app.route('/tickets/:ticketId')
    .get(ticketList.getTaskById)
    .put(ticketList.editTaskById)
    .delete(ticketList.deleteTaskById);
};


module.exports = router;

