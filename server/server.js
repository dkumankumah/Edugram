/**
 * @author Bugra Karaaslan, 500830631, connection to MongoDB
 * To run the server write command 'node server' in the terminal.
 */
require("dotenv").config({path: require('find-config')('.env')})
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

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const MongoClient = require('mongodb').MongoClient;
const io = require('socket.io')(server);
// const {Server} = require("socket.io");
// const io = socketIo(server, { cors: { origin: "*" } });
// const httpServer = require("http").createServer(app);

//  const io = new Server(server,{
//   cors: {
//     // origin: ["*"],
//     origin: "*",
//   }
// });

//Importing route
const ticketRoute = require('./routes/ticketsRoute');

// Mongoose instance connection url connection

// mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(err));

/**
 * Configure app to use bodyParser()
 * Add the routes here as well to get noticed
 * Cache is installed and set for 2 minutes
 */
app.use(cors());
app.use(bodyParser.json());

//Register the route
app.use(ticketRoute);


// Health route to make sure everything is working (accessed at GET http://localhost:3000/health)
app.use('/health', require('express-healthcheck')({}));

server.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});




