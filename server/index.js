/**
 * @author Bugra Karaaslan, 500830631, connection to MongoDB
 * @author Daniel Kumankumah, 500811456, Routes from MongoDB
 * To run the server write command 'node server' in the terminal.
 */
require("dotenv").config({path: require('find-config')('.env')})
const cookieParser = require('cookie-parser')
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
const bcrypt = require('bcrypt')
const {allowedMethods} = require("./middleware/requestMethod");

/**
 * URI of the database, The username and password are in the .env file.
 */
const uri = `mongodb+srv://${username}:${password}@cluster0.wscvjuf.mongodb.net/Edugram?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));


//Middlewares
app.use(cookieParser())
app.use(cors({origin: "http://localhost:3000",credentials: true}))
app.use(bodyParser.json())

//Import routes
const tutorRouter = require('./routes/tutor')
app.use('/tutor', allowedMethods, tutorRouter);


//Routes
app.get('/', (req, res) => {
  res.send('we are on home')
})


app.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Student.find({email: email},
    function (error, data) {
      data.length === 1 ? checkPassword(data, password, res, next) : Tutor.find({email: email},
        function (error, data) {
          data.length === 1 ? checkPassword(data, password, res, next) : Admin.find({email: email},
            function (error, data) {
              data.length === 1 ? checkPassword(data, password, res, next) : res.status(400).send({
                error: 'Invalid Credentials'
              })
              if (error) {
                throw error;
              }
            })
          if (error) {
            throw error;
          }
        })
      if (error) {
        throw error;
      }
    })
})

const createToken = (id, firstName, lastName, role) => {
  return jwt.sign(
    {
      id: id,
      firstName: firstName,
      lastName: lastName,
      role: role

    }, process.env.ACCES_TOKEN_SECRET
  )
}
const createCookie = (id, firstName, lastName, role, res, next) => {
  const token = createToken(id, firstName, lastName, role);
  try {
    res.cookie("access_token", token, {
      //HttpOnly = true meaning we cannot access the token via the javascript aka frontend/google chrome console
      httpOnly: true,
      //Set timer on 1 hour
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    })
      .status(200)
      .json({message: "Logged in successfully"});
  } catch (e){
    throw e
  }

  next();
}

const checkCookie = (req, res, next) => {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  const {cookies} = req;
  if ('access-token' in cookies) {
    console.log('Exists')
  }
  next()
}


const checkPassword = (data, password, res, next) => {
  bcrypt.compare(password, data[0].password).then(result => {
    result ? createCookie(data[0].id, data[0].firstName, data[0].lastName, data[0].role, res, next) : res.status(400).send({
      error: 'Invalid credentials'
    })
  })
}

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
