/**
 * @author Bugra Karaaslan, 500830631, connection to MongoDB
 * @author Daniel Kumankumah, 500811456, Routes from MongoDB
 * To run the server write command 'node server' in the terminal.
 */
require("dotenv").config({ path: require('find-config')('.env') })
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const username = process.env.DATABASE_CONNECTION_USERNAME;
const password = process.env.DATABASE_CONNECTION_PASSWORD;
const jwt = require('jsonwebtoken')
const cors = require('cors');
const bodyParser = require('body-parser')
const Student = require("./models/Student");
const Tutor = require("./models/Tutor");
const Admin = require("./models/Admin");
/**
 * URI of the database, The username and password are in the .env file.
 */
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('connected to db'))
    .catch((err) =>  console.log(err));


//Middlewares
app.use(cors());
app.use(bodyParser.json())

//Import routes
const tutorRouter = require('./routes/tutor')
app.use('/tutor', tutorRouter);


//Routes
app.get('/', (req, res) => {
    res.send('we are on home')
})


app.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Student.find({email: email},
    function (error, data) {
      data.length === 1 ? checkPassword(data, password, res) : Tutor.find({email: email},
        function (error, data) {
          data.length === 1 ? checkPassword(data, password, res)  :  Admin.find({email: email},
            function (error, data) {
              data.length === 1 ? checkPassword(data, password, res)  : res.status(400).send({
                error: 'Invalid Credentials'
              })
              if (error) {
                throw error;
              }})
          if (error) {
            throw error;
          }
        })
      if (error) {
        throw error;
      }
    })
})

const createToken = (firstName, lastName, role) => {
  return jwt.sign(
    {
      firstName: firstName,
      lastName: lastName,
      role: role
    }, process.env.ACCES_TOKEN_SECRET
  )
}

const checkPassword = (data, password, res) => {
  console.log (data[0].role)
  data[0].password === password ? res.status(200).send({
    token: createToken(data[0].firstName, data[0].lastName, data[0].role),
    message: 'succesfully logged in'
  }) : res.status(400).send({
    error: 'Invalid credentials'
  })
}

const checkIfEmailExists = (data, email) => {
  console.log(data[0].role)
  data[0].email === email ? res.status(200).send({
    message: 'Email exists, continue resetting'
  }) : res.status(400).send({
    error: 'Could not find email!'
  })
}
app.listen(8000, () => {
  console.log("Server started on port 8000");
});
