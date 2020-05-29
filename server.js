const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

//app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
         
app.use(express.static('client/build'));

const barberRouter = require('./routes/barber');

app.use('/barber', barberRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});