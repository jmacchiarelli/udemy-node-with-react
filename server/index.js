// create a new express app
const express = require('express');
const app = express();

// create a route handler, associate with given route
app.get('/', (req, res) => {
  res.send({ go: 'OKC Thunder' });
});

// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// testing heroku deployment with github repo connectivity
