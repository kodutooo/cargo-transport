require('dotenv').config();
const { PORT, MONGODB_ADDRESS } = process.env;

const express = require('express');

const mongoose = require('mongoose');
mongoose.connect(MONGODB_ADDRESS, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('MongoDB connected...'));

const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));