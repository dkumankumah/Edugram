/**
 * @author Salman Lartey, 500779627
 * To run the server write command 'node server' in the terminal.
 * Applied potentially caching.
 * health checker of backend
 */
require("dotenv").config({path: require('find-config')('.env')})
const express = require("express");
const mongoose = require("mongoose");

const username = process.env.DATABASE_CONNECTION_USERNAME;
const password = process.env.DATABASE_CONNECTION_PASSWORD;
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const morgan = require('morgan');
const cors = require('cors');
// const apiCache = require("apicache");
// const cache = apiCache.middleware;
// const { swaggerDocs: V1SwaggerDocs } = require("src/v1/swagger");
const PORT = process.env.PORT || 8001
const http = require('http');
const app = express();
const server = http.createServer(app);




// mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

//Importing route
const ticketRoute = require('./routes/ticketsRoute');

/**
 * Configure app to use bodyParser()
 * Add the routes here as well to get noticed
 * Cache is installed and set for 5 minutes
 */
app.use(cors());
//caching all routes for 5 minutes. Debating if it is useful.
// app.use(cache('5 minutes'));
app.use(bodyParser.json());

//Register the route
app.use(ticketRoute);

// Health route to make sure everything is working (accessed at GET http://localhost:3000/health)
app.use('/health', require('express-healthcheck')({}));

// Using morgan middleware to log requests
const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
);

app.use(morganMiddleware);

server.listen(PORT, () => {
  // console.log(`API is listening on port ${PORT}`);
  logger.log('info', `Server Running on the following port:   ${PORT} `)
});

module.exports = app;
