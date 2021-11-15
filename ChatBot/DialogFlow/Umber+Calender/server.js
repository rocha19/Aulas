// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

let bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.send("Teste Plataforma Umbler no Dialogflow");
});

const {google} = require('googleapis');
const calendarId = "9s9i0mjric7e1nhrkhedu9f9ec@group.calendar.google.com"
const serviceAccount = {
    "type": "service_account",
    "project_id": "petshop-hhabke",
    "private_key_id": "35f2b623e9d877c5295bf4a4a31cdf4b33ba84cc",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDACdL+VnZ7zm14\nBbaaCAsRBEmhpcpII3ko9gVffMS4rWi9v2zlIrx5MRuzIZlhRezVxMpeW3mS5vYn\nuWN/jGz2lqSGdLfHQMzDWb09hYZkfMYl1RPVYqaB9jPQosRUkMedylPuWVNW/MxS\nbeHizaYasTDUF/93gQ1FinSM2sEkoKM19gVirgKEEkCURUMvr6mXXSTmvOi0lLXk\njzl1f/LPSWSQysse7bJYRfaQXIgI7Ft9Ruh3QBSGadpZInf3jO6rGv2+XI3bxysM\n6Rr1b1HCzjiVV/IFwr2igKwi5EuGbHhK9kjCFDAKqI7AS6ZG0yEOZeTMFXGEoMVS\ne/9f2pErAgMBAAECggEADRPeMYHT2cSKAeVptP2dO1BubzqqFtWLl7WBUipd/zGX\n82wIz2XZLeuhNkawekZXxYr8OQbDtbRSyQu/8dyvQu+pTpq+NSx9hUQkNf9U0p0I\npWToT9zC+BC7IJclBZlCbsVrh8y/dyoKBAcFnfthN2ofqCHmPM4mCDlQjJMNGiBT\n4jEnxZwnjIezz0P9VZC1tZiKMiORJ0R6rcsNtwtyWVaQ+dwxJesBQlIJo8lAMCb3\nEPrYNq+P1Q0sflIWdu8ibDL+WZ4bCPcWYIDDwvh+HE9ggeE0XzoFFHYgFCrZ+qrR\n1CL2y7J8R4lMBVMaI63X4rdshfapDyAOcr4KfXb/0QKBgQD+GblERy9dtCLQqQQO\nxgss1j2ht6HlAEcZWlmEHaxNdJ1t+J87HlmPgSlggPSiVTWBybp6MVXp0hZCN2GD\nUOrIpk14stjM/dQ2ltgDwRf4LDia1yTUJbwmNCf/+1U+6bkiRBhqL0N9qphH9QZQ\ngZoomHqMAuwdfbhv6SBxPpsf4wKBgQDBeVTKWxybBY2PhsVFiBkzQg4k5thJlDPN\nZTpEn79gBIVmItu3WGOKpOd4/Q6H86mWa65R2WbIEQVSwS7Biptqt6+31NLuSt6h\nMnzpykRb5NqEQpqyAzj+bEUGMZnTG2vkzLcKTTiFSeOs6t6TY13SK0aJSmJX4edE\nrH+t0jv8GQKBgQDWZN3sviM47MRzSigiTvce3aUizc3LanCS86iT0HWQ5NPv9dZk\nCzeF3XUL98JxNXPwDkVI1Feo8ZnWROQB6EQxCCBVtpE2ZPSpGp0ojcOroaQhAWYR\nmcUmdttJIMbMTmfmgY4YCcjoPwg9rn+lbbSkjALaH50ZRPpZclntMuWwAQKBgQCt\nQrzeIs3xPf3R5L1RUVpP/v2vqlNTQTdK3zZZMj4t/J6CIwFkpfEuvhLU1LpooZrj\nrDcF8Y0L6cI8o+f9RuV7olfoZt0mrUHGVfJrY8noCYBvJT5n4F7v6YG+1DiPR2VO\nFs5smU7efpc3yXXdxATHLB4U4NpFHXcAlwIYZcd2MQKBgAMcxJvY4ano/5XTA166\nqRWvkLU1t5VlEcFvHMT8rN9JcEJmqazNA8FLfuhr8ipU01PYXXV9H65bvYZTIvCk\nD20tFmPKhou56OAZAJUH2oVb/KStZuJ+60z7Al/P9TRCIYu4M4MQ5fG4hWDxUUaB\nN2RFrSKecCi4gGWOMiY0HOTj\n-----END PRIVATE KEY-----\n",
    "client_email": "petshopcalendar@petshop-hhabke.iam.gserviceaccount.com",
    "client_id": "115417120862067510488",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/petshopcalendar%40petshop-hhabke.iam.gserviceaccount.com"
  }

const timeZoneOffset = '-03:00';

const serviceAccountAuth = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: 'https://www.googleapis.com/auth/calendar'
  });

const calendar = google.calendar('v3');



const mysql = require("mysql");
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASS = process.env.MYSQL_PASS;
const MYSQL_DB = process.env.MYSQL_DB;

app.post("/petshop",function(request,response){

    let intentName = request.body.queryResult.intent.displayName;

    if (intentName === "agendamento"){

        let nome = request.body.queryResult.parameters['nome-cliente'];
        let fone = request.body.queryResult.parameters['fone-cliente'];

        let sql_query = "insert into clientes values ('"+nome+"','"+fone+"')";

        let connection = mysql.createConnection({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASS,
            database: MYSQL_DB
        });
        connection.connect()

        connection.query(sql_query, function(error, results, fields){
            if (error) throw error;
            connection.end()
            response.json({"fulfillmentText":"Seus dados foram salvos com sucesso, quer agendar agora ?"})
        })

    } else if (intentName === "agendamento - yes"){

        let cliente = request.body.queryResult.outputContexts[1].parameters['nome-cliente'];

        let tipo    = request.body.queryResult.parameters['tipo'];
        let servico = request.body.queryResult.parameters['servico'];
        let data    = request.body.queryResult.parameters['data'];
        let hora    = request.body.queryResult.parameters['hora'];

        const dateTimeStart = new Date(Date.parse(data.split('T')[0] + 'T' + hora.split('T')[1].split('-')[0] + timeZoneOffset));
        const dateTimeEnd = new Date(new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1));
        const agendamentoString = formatData(new Date(data.split('T')[0]))+ " as "+hora.split('T')[1].split('-')[0];

        return criarEventoCalendario(dateTimeStart, dateTimeEnd, servico,tipo,cliente).then(() => {
            let mensagem = `Excelente, seu serviço esta agendado para ${agendamentoString} `;
            console.log(mensagem);
            response.json({"fulfillmentText":mensagem});
          }).catch(() => {
            let mensagem = `Desculpe, não temos mais vaga para ${agendamentoString}.`;
            console.log(mensagem);
            response.json({"fulfillmentText":mensagem});
          });

    }
})

function criarEventoCalendario(dateTimeStart, dateTimeEnd, servico,tipo,cliente) {
    return new Promise((resolve, reject) => {
      calendar.events.list({
        auth: serviceAccountAuth, // List events for time period
        calendarId: calendarId,
        timeMin: dateTimeStart.toISOString(),
        timeMax: dateTimeEnd.toISOString()
      }, (err, calendarResponse) => {
        // Check if there is a event already on the Calendar
        if (err || calendarResponse.data.items.length > 0) {
          reject(err || new Error('Requisição conflita com outros agendamentos'));
        } else {
          // Create event for the requested time period
          calendar.events.insert({ auth: serviceAccountAuth,
            calendarId: calendarId,
            resource: {summary: servico +'-'+tipo+'-', description: '['+cliente+']['+servico+']['+tipo+']',
              start: {dateTime: dateTimeStart},
              end: {dateTime: dateTimeEnd}}
          }, (err, event) => {
            err ? reject(err) : resolve(event);
          }
          );
        }
      });
    });
  }

function formatData(date) {
    var nomeMes = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Dezembro"
    ];
  
    var dia = date.getDate();
    var mesIndex = date.getMonth();
    var ano = date.getFullYear();
  
    return dia + ' ' + nomeMes[mesIndex] + ' ' + ano;
}

// listen for requests :)
var port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log('Your app is listening on port no ' + listener.address().port);
});