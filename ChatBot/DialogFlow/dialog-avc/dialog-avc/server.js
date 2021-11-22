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

// ------ Sessions Client ---
const projectId = 'curso-1619b';
const sessionId = uuid.v4();
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId,sessionId);
console.log(sessionPath);
// ---------------------------

// ------ Intents Client -----
const intentsClient = new dialogflow.IntentsClient();
const projectAgentPath = intentsClient.projectAgentPath(projectId);
console.log(projectAgentPath);
//------

// ------ Entidades -----
const entitiesClient = new dialogflow.EntityTypesClient();
const entityPath = entitiesClient.projectAgentPath(projectId);

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
    console.log(res[0].queryResult);
    response.json(res)
  
  })
  .catch(err => console.log(err))
})


app.get('/listarIntents',async function(request,response){
  
  let [results] = await listarIntents();
  
  let html = "<TABLE border=1>";
  
  results.forEach((item)=>{
    
    html += "<TR><TD>" + item.displayName + "--"+item.name+"--</TD></TR>"
    
    // Resposta Padrao
    item.messages.forEach((message)=>{
      html += "<TR><TD> Resposta Padrão ==> " + message.text.text + "</TD></TR>"
    })
    
    //Training Phrases
    item.trainingPhrases.forEach((training)=>{
      training.parts.forEach((part)=>{
        
        html += "<TR><TD> Frase ==> " + part.text + "</TD></TR>"
        
      })
    })
  })
  
  html += "</TABLE>"
  
  response.send(html);
  //response.json(results);
  
});

async function listarIntents() {
  
  let params = {
    parent: projectAgentPath,
    intentView: 'INTENT_VIEW_FULL'
  }
  
  const results = await intentsClient.listIntents(params);
  
  return results;
  
}

// Criar Intent
app.get('/criarIntent',async function(request,response){
  
  let resultado = await criarIntent();
  
  response.json(resultado);
  
  
})

async function criarIntent(){
  
  let frases = [
    {
      type: 'EXAMPLE',
      parts: [
        {
          text: "como agendar aula"
        },
        {
          text: "hoje",
          entityType: "@sys.date-time",
          alias: "data-agendamento"
        }
      ]
    },
    {
      type: 'EXAMPLE',
      parts: [
        {
          text: "fazer aula"
        }
      ]
    }
  ]
    
  let respostas = [
    {
      text: {
        text: ["Sua aula foi agendada","Aula agendada com sucesso"]
      }
    }
  ]
  
  let parametros = [
    {
      displayName: "data-agendamento",
      entityTypeDisplayName: "@sys.date-time",
      mandatory: true,
      prompts: ["Para quando vocer quer a aula","Quando seria a aula"]
    }
  ]
  
  
  let intent = {
    displayName: 'agendar.aula',
    webhookState: 'WEBHOOK_STATE_UNSPECIFIED',
    trainingPhrases: frases,
    messages: respostas,
    parameters: parametros
  }
  
  let params = {
    parent: projectAgentPath,
    intent: intent
  }
  
  const [result] = await intentsClient.createIntent(params);
  
  console.log(result);
  
  return result;

}

app.get('/apagarIntent', async function(request,response){
  
  let params = {
    name: 'projects/curso-1619b/agent/intents/bfafc7e6-270b-4327-b833-819c9dd02e5e'
  }
  
  let result = await intentsClient.deleteIntent(params);
  
  response.json(result);
  
})

app.get('/batchIntent',async function(request,response){
  
  let result = await batchIntent();
  response.json(result);
  
})

async function batchIntent() {
  
  let params = {
    parent: projectAgentPath,
    languageCode: 'pt-br',
    intentBatchUri: 'gs://curso-1619b.appspot.com/intents/exemplo.json'
  }
  
  const [operation] = await intentsClient.batchUpdateIntents(params);
  
  const [result] = await operation.promise();
  
  console.log(result);
  
  return result;
  
  
}

app.get('/listEntidades', async function(request,response){
  
    let params = {
      parent: entityPath
    }
    
    const [entidades] = await entitiesClient.listEntityTypes(params);
      entidades.forEach(entityType => {
        console.log(`Nome da Entidade: ${entityType.name}`);
        console.log(`Display Name: ${entityType.displayName}`);
        console.log(`Numero de Entidades: ${entityType.entities.length}\n`);
    });
  
  return response.json(entidades);
  
});




// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
