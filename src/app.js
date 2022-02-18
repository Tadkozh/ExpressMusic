require('dotenv').config();
const express = require('express');
const tracksRouter = require('./routes/tracks');
const albumsRouter = require('./routes/albums');
const connection = require('./db-config');

const app = express();

app.use(express.json());
app.use('/api/tracks', tracksRouter);
app.use('/api/albums', albumsRouter);

connection.query('SELECT * FROM track', (err, results) => {
  // Do something when mysql is done executing the query
  console.log(err, results);
});

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
