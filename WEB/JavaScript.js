/* 
Criação de varíaveis: 
var;
let; 
const. 
*/


function modifica() {
    var paragrafo = document.getElementById("topo");
    console.log(paragrafo.style.color)
    //document.white("<h2>Teste Javascript</h2>")
    paragrafo.innerHTML = "<h1>"
    paragrafo.style.color = "red"
    paragrafo.style.backgroundColor = "black"
    console.log("Elemtento Parágrafo:", paragrafo)
}

function modificaDeNovo(){
    var paragrafo = document.getElementById("topo");
    paragrafo.style.color = "blue"
    paragrafo.style.backgroundColor = "yellow"
    paragrafo.innerHTML = "<h3>Bom dia</h3>"
}

function media(){
    //Modo 1 de receber um valor inteiro
    var input1 = document.getElementById("nota1")
    var nota1 = Number(input1.value)

    //Modo 2 de receber um valor inteiro
    var nota2 = document.getElementById("nota2").value
    nota2 = Number(nota2)
   
    var media = (nota1 + nota2) / 2
    document.getElementById("resultado").innerText = `Média: + ${media}`
    console.log(media)
}
