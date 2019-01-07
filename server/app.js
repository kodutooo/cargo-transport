require('dotenv').config();
const { PORT, MONGODB_ADDRESS } = process.env;
const PATH_TO_CLIENT = '../client/src';

const http = require('http');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { attachSocket } = require('./sockets/shipment');

mongoose.connect(MONGODB_ADDRESS, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('MongoDB connected...'));

const app = express();
const server = http.createServer(app);
attachSocket(server);

app.use(express.static(path.resolve(__dirname, PATH_TO_CLIENT)));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));