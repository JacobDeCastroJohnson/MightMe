var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const db = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// Get Request data generator
app.get('/api/MightyMe-Data', (req, res) => {
  db.retrieveData((err, response) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    } else {
      res.status(200).send(response);
    }
  });
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.listen(3000, function() {
//   console.log('listening on port 3000!');
// });

