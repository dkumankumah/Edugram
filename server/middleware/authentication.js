const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    res.json({error: 'Error token invalid'})
  }
  const bearerToken = authHeader.split(' ')
  const token = bearerToken[1]
  const checkToken = () => {
    jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err) => {
        if (err){
          return next(err)
        }
        console.log('next')
        return next()
      }
    )
  }

  token ? checkToken() : res.json({
    message: 'Something went wrong!'
  })

}
