require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const bodyParser = require('body-parser');
const route = require('./routes/videoRoute.js');

// Connect to database
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => console.log(error));
database.once('connected', () => console.log('Connected to database'));

// Create server
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});