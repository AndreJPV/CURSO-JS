function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#d9c392'
        msg.innerHTML += ' <strong>BOM DIA</strong>!'
    } else if ( hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        msg.innerHTML += ' <strong>BOA TARDE</strong>!'
        document.body.style.background = '#af6553'
    } else {
        img.src = 'fotonoite.png'
        msg.innerHTML += ' <strong>BOA NOITE</strong>!'
        document.body.style.background = '#263d43'
    } 
}
