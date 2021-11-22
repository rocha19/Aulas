/*
Created!
You have successfully created a new database. The details are below.

Username: YNJCf7OHS8

Database name: YNJCf7OHS8

Password: TEbvtEWH6A

Server: remotemysql.com

Port: 3306

These are the username and password to log in to your database and phpMyAdmin

Make sure you keep your password secure. Ensure you keep back ups of your database in case it gets deleted.
*/
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB  
});
connection.connect();

var intentName = request.body.queryResult.intent.displayName;

if (intentName == 'incluir.contatos') {
    console.log('incluir')
    
    var nome_cliente   = request.body.queryResult.parameters['cliente-nome'];
    var tefone_cliente = request.body.queryResult.parameters['cliente-telefone'];
    var servico_cliente  = request.body.queryResult.parameters['cliente-servico'];
    var animal_cliente = request.body.queryResult.parameters ['cliente-animal'];
      
    var query = 'insert into contato values ("'+nome_cliente+'","'+tefone_cliente+'","'+servico_cliente+'","'+animal_cliente+'")';
    
    connection.query(query, function (error, results, fields) {
       if (error) throw error;
       connection.end();
       response.json({"fulfillmentText" :"Contato Inserido com Sucesso" })

  
} else if (intentName == 'atualizar.contatos') {
  console.log('atualizar')
  
  var numero_contato = request.body.queryResult.parameters['numero-contato'];

  var query = 'select * from contato where telefone = "'+numero_contato+'"';
  
  connection.query(query, function (error, results, fields) {
     if (error) throw error;
     connection.end();
     response.json({"fulfillmentText" :"Quer Alterar - "+results[0].nome+"-"+results[0].email })
  }); 
  
} else if (intentName == 'apagar.contatos') {
  console.log('apagar')
  
  var numero_contato = request.body.queryResult.parameters['numero-contato'];       
  var query = 'delete from contato where telefone = "'+numero_contato+'"';
  
  connection.query(query, function (error, results, fields) {
     if (error) throw error;
     connection.end();
     response.json({"fulfillmentText" :"Contato Apagado com Sucesso" })
  }); 
  
} else if (intentName == 'pesquisar.contatos') {
  console.log('pesquisar')
  
  var nome_contato   = request.body.queryResult.parameters['nome-contato'];
  var query = 'select * from contatos where nome = "'+nome_contato+'"';
  
  connection.query(query, function (error, results, fields) {
     if (error) throw error;
     connection.end();
     var contato =  '';
     contato = 'Numero =>'+results[0].telefone+'- Nome =>'+results[0].nome+'-Email =>'+results[0].email;
     response.json({"fulfillmentText" : contato })
  }) ;
} else if (intentName == 'atualizar.contatos - yes')  {
  console.log("atualizar-yes");
  
  var numero_contato = request.body.queryResult.outputContexts[0].parameters['numero-contato'];
  var nome_contato   = request.body.queryResult.parameters['nome-contato'];
  var email_contato  = request.body.queryResult.parameters['email-contato'];
  
  var query = 'update contato set nome = "'+nome_contato+'",email = "'+email_contato+'" where telefone = "'+numero_contato+'"';
 
  connection.query(query, function (error, results, fields) {
     if (error) throw error;
     connection.end();
     response.json({"fulfillmentText" :"Contato Alterado" })
  }); 
  
}}
