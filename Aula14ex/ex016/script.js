function contar() {
    var tn1 = document.querySelector('input#txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var tn3 = document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')
   

    if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0){
        res.innerHTML = `Impossível contar!`}

        else {
            res.innerHTML = 'Contando:<br>'
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var n3 = Number(tn3.value)
            
            if (n3 < 1) {
                alert('Passo inválido! Considerando Passo 1')
                n3 = 1
            }
            if (n1 < n2) {
                //contagem crescente
                for(var c = n1; c<=n2; c += n3) {
                    res.innerHTML += c + `\u{1F449}`
                }
            }
            if (n1 > n2) {
                //contagem decrescente
                for(var c = n1; c>=n2; c -= n3) {
                    res.innerHTML += c + `\u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
   
