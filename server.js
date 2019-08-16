const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  SSEManager = require('./eventSystem/SSEManager.js');



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:betadelta11@cluster0-sacx6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


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
