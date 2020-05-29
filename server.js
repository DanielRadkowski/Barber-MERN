const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

app.use(cors({origin: true, credentials: true}));

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