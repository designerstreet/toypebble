const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { parentname, email, password, confirmPassword, address, babyname, gender, age } = req.body;

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (!parentname || !email || !password || !confirmPassword || !address || !babyname || !gender || !age) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      parentname,
      email,
      password: hashedPassword,
      address,
      babyname,
      gender,
      age
    });

    await newUser.save();

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ message: "Registered Successfully", newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    console.log('Found user:', user);

     // Compare the entered password with the stored hashed password
     const passwordMatch = await bcrypt.compare(password, user.password);
  
     if (!passwordMatch) {
       return res.status(401).json({ message: "Invalid Email or Password!" });
     }

    console.log('User authenticated successfully:', email);

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// Forgot Password route
router.post('/forgotpassword', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    const resetLink = `${process.env.FRONTEND_URL}/#/resetPassword/?token=${resetToken}`;

    const options = {
      email,
      subject: "Reset Your Password",
      html: `<p>Click the following link to reset your password:</p><p><a href="${resetLink}">${resetLink}</a></p>`
    };

    sendEmail(options);

    res.status(200).json({
      message: "Check your mail for reset instructions!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Reset Password route
router.post('/resetpassword', async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } });

    if (!user) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }

    console.log('User found for reset:', user.email);

    // Hash the newPassword using bcrypt
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log('New hashed password:', hashedPassword);

    // Update user object
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save updated user object
    await user.save();

    console.log('Password reset successful for user:', user.email);

    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    console.error("Error during password reset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});






module.exports = router;
