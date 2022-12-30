const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

module.exports.checkCookie = (req, res, next) => {
  const authcookie = req.headers.cookie.split('"')[1]
  if (!authcookie) {
    return res.status(403).send({error: 'Cookie does not exist'});
  }

  if (!jwt) {
    return res.status(403).send({error: 'Token does not exist'});
  }

  jwt.verify(authcookie, process.env.ACCES_TOKEN_SECRET, (err, data) => {
    if (err) {
      res.status(403).send({error: 'Malformed token detected'})
    } else if (data) {
      req.id = data.id
      req.role = data.role
      next()
    } else {
      res.send({message: 'something else in check jwt'})
    }
  })

}



