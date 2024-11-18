const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

//user signup controller
const signUp = async (req, res) => {
  try {
    // Input validation
    const { firstName, lastName, gender, dateOfBirth, country, zipCode, email, password } = req.body;
    if (!email) {
      return res.status(400).send({ success: false, message: 'Enter walid email' });
    }
    if (!password) {
      return res.status(400).send({ success: false, message: 'enter correct password' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ success: false, message: 'Email is already registered' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);



    let profilePicture = [];
    if (req.file) {
      profilePicture.push(req.file.path);

    }

    if (profilePicture && profilePicture.length < 1) {

      return res.status(400).send({ success: false, message: "profile picture is required" })

    }

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      country,
      zipCode,
      email,
      password: hashedPassword,
      profilePicture
    });

    const newUser = await user.save();

    // const expirationSeconds = Math.floor(Date.now() / 1000) + (90 * 24 * 60 * 60);
    const token = jwt.sign({ user: newUser._id }, process.env.TOKKENSECRET);
    console.log(token)
    res.cookie('token', token);

    return res.status(200).json({ success: true, message: 'Signed in', newUser, token });

  } catch (err) {
    // console.log(err)
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(403).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.TOKKENSECRET);

    res.cookie("token", token); // Ensure security for cookie
    return res.status(200).json({ success: true, message: 'Success', token, _id: user._id });

  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


const loggedIn = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    // console.log(user)
    res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).send({ success: false, message: "interval server error" });

  }
}


const updateUserPassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = req.user; // Assuming you have a middleware to extract user ID from the token

    // Validate inputs
    if (!currentPassword || !newPassword) {
      res.status(400).json({ success: false, message: 'Current password and new password are required' });
    }


    // Check if current password is correct
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      res.status(403).json({ success: false, message: 'Invalid current password' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}


const logout = async (req, res) => {
  try {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    });
    res.status(200).json({ msg: 'user logged out!' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "internal server error" })
  }
};

module.exports = { signUp, logIn, loggedIn, updateUserPassword, logout };
