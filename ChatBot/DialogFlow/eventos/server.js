// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});


const {WebhookClient} = require('dialogflow-fulfillment');

app.post('/agente',function(request,response){
  
  const agent = new WebhookClient({ request:request, response:response });
  
  let intentMap = new Map();
  intentMap.set('validar.promocao', validar_promocao);
  agent.handleRequest(intentMap);
  
  function validar_promocao(agent) {
    
    let idade = parseInt(agent.parameters.idade);
    
    if (idade >= 18 ) {
      agent.add('tem que ter essa mensagem');
      agent.setFollowupEvent('cupom');
    } else {
     	agent.add('[GLITCH] - Essa promoção é para clientes maiores de 18 anos'); 
    }
    
  }

  
});








// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
