// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  // Get the token from the request headers, query parameters, or cookies
  // const token = req.headers['authorization'] || req.query.token || req.cookies.token;

  const token = req.header("token")
  console.log(token, "this is token")

  if (!token) {
    return res.status(401).json({ success: false, message: 'Please Login First' });
  }

  const decoded = jwt.verify(token, process.env.TOKKENSECRET)

  const user = await User.findById(decoded._id)

  req.user = user
  next();
};

module.exports = verifyToken;
