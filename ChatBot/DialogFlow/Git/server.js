// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

const dialogflow = require('dialogflow');
const uuid = require('uuid');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const projectId = 'cursodialogoflow-dcin';
const sessionId = uuid.v4();
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId,sessionId);
console.log(sessionPath);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    response.send("Teste Plataforma Umbler");
});

app.post('/detectIntent', function(resquest, response){
    const query = {
        session: sessionPath,
        quaryInput:{
            text: {
                text: 'Ola',
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
var port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
    console.log('Your app is listening on port no ' + listener.address().port);
});
