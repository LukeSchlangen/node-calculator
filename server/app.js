var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//modules
var calculate = require('./modules/calculator');

// middleware
app.use(express.static('public'));

app.use(bodyParser.json());


app.get('/', function(req,res){
  res.sendFile(path.joing(__dirname, '../public/views/index.html'));
});

app.post('/', function(req,res){
  console.log('in post route');
  console.log('req.body in post = ', req.body);
  calculate(req.body);
  res.sendStatus(200);
});

var server = app.listen('3000', function() {
  var port = server.address().port;
  console.log('listening on port', port);
})
