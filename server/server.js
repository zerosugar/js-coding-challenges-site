var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('tiny'))

app.use(express.static('client'));
app.use('/node_modules', express.static('node_modules'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on', port);
})
