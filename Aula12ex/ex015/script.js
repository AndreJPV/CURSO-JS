function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <5) {
                // Criançam
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 12) {
                // Menino
                img.setAttribute('src', 'menino.png')
            } else if (idade < 23) {
                // Moço
                img.setAttribute('src', 'moco.png')
            } else if (idade < 60) {
                // Homem
                img.setAttribute('src', 'homem.png')
            } else {
                // Senhor
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero =  'Mulher'
            if (idade >=0 && idade <5) {
                // Criançaf
                img.setAttribute('src', 'criancaf.png')
            } else if (idade < 12) {
                // Menina
                img.setAttribute('src', 'menina.png')
            } else if (idade < 23) {
                // Moça
                img.setAttribute('src', 'moca.png')
            } else if (idade < 60) {
                // Mulher
                img.setAttribute('src', 'mulher.png')
            } else {
                // Senhora
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `<p>Detectamos com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
    