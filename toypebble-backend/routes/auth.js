const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const dotenv = require('dotenv');
dotenv.config();
const shortid = require('shortid')
const Razorpay = require('razorpay')
const authenticateToken = require('../middleware/authenticateToken');
const Order = require('../models/Order');

const razorpay = new Razorpay({
	key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET
	
  // key_id: 'rzp_test_MbvCrlVKQULYIu',
  // key_secret: 'v3emfaULHJ1Gc6gJYTSAolDl',
  
})

// Define subscription plans
const subscriptionPlans = {
  basic: 1199,
  standard: 1099,
  premium: 999,
};


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

    const payload = { user: { id: newUser._id.toString() } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

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
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Found user:', user);

    // Compare the entered password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    console.log('User authenticated successfully:', email);

    const payload = { user: { id: user._id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: {
          parentname: user.parentname, // Include any other user details you need
          email: user.email,
          babyname: user.babyname,
          address: user.address,
          gender: user.gender,
          age: user.age
          // Add more fields as needed
        }
      });
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

    const resetLink = `${process.env.REMOTE_FRONTEND_APP}/#/resetPassword/?token=${resetToken}`;

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


router.post('/razorpay', async (req, res) => {
  const { planType } = req.body;

  if (!subscriptionPlans[planType]) {
    return res.status(400).json({ error: 'Invalid subscription plan type' });
  }

  const amount = subscriptionPlans[planType];
  const gstAmount = amount * 0.18;
  const totalAmount = amount + gstAmount;
	const payment_capture = 1
	
	const currency = 'INR'

	const options = {
		amount: totalAmount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
});

// Plan amount retrieval route
router.post('/planamount', (req, res) => {
  const { planType } = req.body;

  if (planType && subscriptionPlans[planType] !== undefined) {
    res.json({ amount: subscriptionPlans[planType] * 100 });
  } else {
    res.status(400).json({ error: 'Invalid plan type' });
  }
});

router.get('/orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId });
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});






// POST /orders - Save a new order
router.post('/orders', authenticateToken, async (req, res) => {
  try {
    const { orderId, orderDate, plan, ageGroup } = req.body;
    console.log('Received order data:', { orderId, orderDate, plan, ageGroup });

    if (!orderId || !orderDate || !plan || !ageGroup) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newOrder = new Order({
      userId: req.userId,
      orderId,
      orderDate,
      plan,
      ageGroup,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const VENDOR_EMAIL = process.env.VENDOR_EMAIL; // Fixed vendor email address from environment variables

// Send Order Email route
router.post('/sendOrderEmail', authenticateToken, async (req, res) => {
  try {
    const { orderId, plan, ageGroup, name, email } = req.body;

    if (!orderId || !plan || !ageGroup || !name || !email) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Fetch order details if needed
    const order = await Order.findOne({ orderId });
    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    const emailContent = `
      <p>Dear ${name},</p>
      <p>Thank you for your purchase.</p>
      <p>Order ID: ${orderId}</p>
      <p>Plan: ${plan}</p>
      <p>Age Group: ${ageGroup}</p>      
      <p>DOB: ${user.age}</p>
      <p>Regards,<br>Toypebble Team</p>
    `;

    const vendorEmailContent = `
      <p>New Order Received</p>
      <p>Order ID: ${orderId}</p>
      <p>Plan: ${plan}</p>
      <p>Age Group: ${ageGroup}</p>
      <p>Parent Name: ${user.parentname}</p>
      <p>Address: ${user.address}</p>      
      <p>DOB: ${user.age}</p>
      <p>Customer Email: ${email}</p>
    `;

    const userMailOptions = {
      email,
      subject: "Order Confirmation",
      html: emailContent
    };

    const vendorMailOptions = {
      email: VENDOR_EMAIL,
      subject: "New Order Received",
      html: vendorEmailContent
    };

    // Send email to user
    await sendEmail(userMailOptions);

    // Send email to vendor
    await sendEmail(vendorMailOptions);

    res.status(200).json({ message: "Order emails sent successfully." });
  } catch (error) {
    console.error('Error sending order emails:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// New sendContactEmail route
router.post('/sendContactEmail', async (req, res) => {
  try {
    const { name, email, contactNo, message } = req.body;

    if (!name || !email || !contactNo || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const emailContent = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Contact No: ${contactNo}</p>
      <p>Message: ${message}</p>
    `;

    const mailOptions = {
      email: process.env.VENDOR_EMAIL, // Replace with the recipient's email address
      subject: 'Contact Form Submission',
      html: emailContent
    };

    await sendEmail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending contact form email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// const authenticateToken = (req, res, next) => {
//   const token  =  req.headers.authorization;

 
    
//    console.log("auth",token)

//   if (!token) {
//     return res
//       .status(401)
//       .json({ success: false, message: "Access Denied. Not Authorized" });
//   }
//   const accessToken = token.split(" ")[1]; //Assuming it is the format of Bearer token

//   try {
//     const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
//     console.log("decoded",decoded)
//     req.userId = decoded.userId; // Attack the

//     next(); // Proceed to the next middleware or the main function now this req.userId we used anywhere
//   } catch (error) {
//     // If the token is invalid or expired, send an error message to the user
//     console.log("error is ", error);
//     return res.status(401).json({ success: false, message: "Please Login" });
//   }
// };

// // Route to fetch user data
// router.get('/user', authenticateToken, async (req, res, next) => {
//   try{

//     //fetch the user details in database based on the userId attached by the middelware
//     const user = await User.findOne({_id : req.userId}).select("-password")
//     console.log(user)
//     if(!user){
//         return res.status(404).json({
//             message  : "User not found"
//         })
    
//     }
//     //send the user details to user 
//     return res.status(200).json({success : true , message : "user details",user : user})
    
//         }catch(error){
//             console.log("Error fetcing user profile : ",error);
//             res.status(500).json({message: " Internal Server Error"})
//         }
    
//     });



module.exports = router;
