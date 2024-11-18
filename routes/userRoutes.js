const express = require("express");
const router = express.Router();
const upload = require("../utils/upload.js");
const verifyToken = require("../middlewares/verifyToken")

const { signUp, logIn, loggedIn, updateUserPassword, logout } = require('../controllers/userControllers')

router.post('/signup', upload.single('profilePicture'), signUp);
router.post('/signin', logIn);
router.put('/updatePassword', verifyToken, updateUserPassword);
router.get('/loggedIn', verifyToken, loggedIn);
router.get('/logout', verifyToken, logout);
// router.sendOTP('/forgetpassword',verifyToken, sendOTP);
// router.post('/verify/otp',verifyToken,verifyOTP);


module.exports = router;