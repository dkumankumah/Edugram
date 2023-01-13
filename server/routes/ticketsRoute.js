const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticketsController');

router.get("/tickets", ticketController.getTickets);
router.get("/getById", ticketController.getTicketById);
router.post("/createTicket", ticketController.createTicket);
router.delete("/deleteTicketId", ticketController.deleteTicketById);
router.put("/editTicket", ticketController.deleteTicketById);

module.exports = router;
