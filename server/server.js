/**
 * @author Bugra Karaaslan, 500830631, connection to MongoDB
 * To run the server write command 'node server' in the terminal.
 */
require("dotenv").config({ path: require('find-config')('.env') })
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const username = process.env.DATABASE_CONNECTION_USERNAME;
const password = process.env.DATABASE_CONNECTION_PASSWORD;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const cors = require('cors');
const port = process.env.PORT || 8001
//Importing route
const routes = require('./routes/ticketsRoute');

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected to db'))
  .catch((err) =>  console.log(err));

/* Configure app to use bodyParser()
   this will let us get the data from a POST */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Register the route
routes(app);

// Start the server
app.listen(port);
console.log('server listening on: ' + port);

// Get an instance of the express Router
router = express.Router();

// Health route to make sure everything is working (accessed at GET http://localhost:3000/health)
app.use('/health', require('express-healthcheck')({
}));

// All of our routes will be prefixed with /api
// app.use('/api', router);
