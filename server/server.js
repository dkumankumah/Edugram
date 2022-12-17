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
const apiCache = require("apicache");
const cache = apiCache.middleware;
// const { swaggerDocs: V1SwaggerDocs } = require("src/v1/swagger");
const PORT = process.env.PORT || 8001
//Importing route
const ticketRoute = require('./routes/ticketsRoute');

// Mongoose instance connection url connection
// mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to db'))
  .catch((err) =>  console.log(err));

/* Configure app to use bodyParser()
   this will let us get the data from a POST */
app.use(cors());
app.use(cache("10 minutes"));
app.use(bodyParser.json());

app.use(ticketRoute);
//Register the route


// Health route to make sure everything is working (accessed at GET http://localhost:3000/health)
app.use('/health', require('express-healthcheck')({

}));



// Start the server
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  /// *** ADD ***
  // V1SwaggerDocs(app, PORT);
});

// All of our routes will be prefixed with /api
// app.use('/api', router);
