function imprime() 
{
    return console.log("Meu nome é: " + filho)
    
}

function filho()
{
    var filhos = ['maria', 'daniel', 'ana']

    // filhos.forEach(imprime)

    novoVetor = filhos.map(imprime)
    console.log(novoVetor)
}