
const dotenv = require('dotenv');
dotenv.config();const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const helmet = require('helmet');


const app = express();
const {port, allowedDomains } = config;

// Replace with your MongoDB connection string
// const mongoDB = 'mongodb+srv://nanditak472:kuHJu4pByhDXrTFd@cluster0.flgeiqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = 'mongodb+srv://toypebble:sfjuUUVdnOYRPpUe@cluster0.8tth1lx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
 
  app.use(cors({
    origin: allowedDomains
  }));

  app.use(helmet());
app.use(bodyParser.json());


app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
