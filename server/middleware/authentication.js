const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

module.exports.verifyToken = (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    res.json({error: 'Error token invalid'})
  }
  console.log(authHeader)
  const bearerToken = authHeader.split(' ')
  const token = bearerToken[1]
  const checkToken = () => jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err) => {
      if (err) {
        return next(err)
      }
      console.log('next')
      return next()
    }
  )

  token ? checkToken() : res.json({
    message: 'Something went wrong!'
  })

}
