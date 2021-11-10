//Exemplo de objeto
var objeto = {
    item_1: descricao,
    item_2: descricao,
    item_3: descricao
}

//Transforma o objeto em texto
localStorage.setItem("objeto", JSON.stringify(objeto))

//transforma de texto para objeto
JSON.parse()