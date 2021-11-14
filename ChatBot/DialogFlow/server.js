// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.send("Teste Plataforma Umbler");
});

// listen for requests :)
var port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log('Your app is listening on port no ' + listener.address().port);
});
