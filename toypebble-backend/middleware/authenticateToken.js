const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token part after 'Bearer'

  if (token == null) {
    return res.status(401).json({ success: false, message: "Access Denied. Not Authorized" });
  }

  console.log('Token:', token); // Log the token to verify it's being sent

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err); // Log the error for debugging
      return res.status(403).json({ success: false, message: "Invalid Token" });
    }

    try {
      console.log('Decoded User:', decoded); // Log the decoded user data
      // Extract user ID from decoded payload
      const userId = decoded.user && decoded.user.id;
      console.log('User ID:', userId); // Log the User ID before validation
      
      // Check if the userId is a valid ObjectId
      if (!mongoose.isValidObjectId(userId)) {
        throw new Error("Invalid User ID");
      }
      
      // Assign the valid userId to req.userId
      req.userId = userId;
    } catch (error) {
      console.error('Invalid User ID error:', error); // Log any conversion errors
      return res.status(500).json({ success: false, message: "Invalid User ID" });
    }

    next();
  });
};

module.exports = authenticateToken;
