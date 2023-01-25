const jwt = require("jsonwebtoken");
module.exports.createToken = (id, firstName, lastName, role) => {
  return jwt.sign(
    {
      id: id,
      firstName: firstName,
      lastName: lastName,
      role: role
    }, process.env.ACCES_TOKEN_SECRET
  )
}
