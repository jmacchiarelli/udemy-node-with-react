// creating a brand new express application and route handler

// import express library, common JS modules for requiring or sharing code between files
const express = require('express');

// calling express like a function generates a new application that represents a running express app
const app = express();

// route handler and associate with a given route
app.get('/', (req, res) => {
  res.send({hi: 'there'})
});

// route to port 5000
app.listen(5000);
