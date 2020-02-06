// creating a brand new express application and route handler

// import express library, common JS modules for requiring or sharing code between files
const express = require('express');

// calling express like a function generates a new application that represents a running express app
const app = express();

// route handler and associate with a given route
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

// dynamic port adding in prod, heroku will later inject env variables in runtime, pass runtime config
const PORT = process.env.PORT || 5000;
app.listen(PORT);



// specicy start script,
