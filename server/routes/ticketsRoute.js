const express = require('express')
const Ticket = require("../models/ticketsModal");
const router = express.Router()
const ticketList = require('../controllers/ticketsController');
const ticketController = require('../controllers/ticketsController');

router.get("/tickets", ticketController.getTickets);
router.post("/createTicket", ticketController.createTicket);
router.get("/ticketss", ticketController.getAllWorkouts);



module.exports = router;

