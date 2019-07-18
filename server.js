const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  SSEManager = require('./eventSystem/SSEManager.js');


//  Apply Middleware for post requuests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  Apply default headers
app.use('/event-stream', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

eventManager = new SSEManager(app);

const routes = require('./api/routes.js'); //importing route
routes(app, eventManager); //register the route


app.listen(port);
