// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const dialogflow = require('dialogflow');
const uuid = require('uuid');

const bodyParser = require('body-parser')
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));

const projectId = 'curso-1619b';
const sessionId = uuid.v4();
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId,sessionId);
console.log(sessionPath);




// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/chat', function(request, response) {
  response.sendFile(__dirname + '/views/chat.html');
});

app.get('/login', function(request, response) {
  response.sendFile(__dirname + '/views/login.html');
});

app.get('/logout', function(request, response) {
  response.sendFile(__dirname + '/views/logout.html');
});

app.post('/detectIntent',function(request,response){
  
  let texto = request.body.texto;
  
  const query = {
    session: sessionPath,
    queryInput:{
      text: {      
          text: texto,
          languageCode: 'pt-br'
      }
    }
  }
  
  sessionClient.detectIntent(query)
    .then((res)=>{
    response.json(res)
  
  })
  .catch(err => console.log(err))
})



// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
