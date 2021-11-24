function carregar() 
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    /*
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/fotomanha.png'
        document.body.style.background = ''
        // img.setAttribute = 'src', 'photo.png'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/fototarde.png'
        document.body.style.background = '' 
    } else {
        //BOA NOITE
        img.src = 'img/fotonoite.png'
        document.body.style.background = '' 
    }
    */
}
