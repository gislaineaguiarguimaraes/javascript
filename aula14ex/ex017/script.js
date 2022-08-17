function contar() {
    var num1 = window.document.getElementById ('num1')
    var num2 = window.document.getElementById('num2')
    var passo = window.document.getElementById('passo') 
    var resp = window.document.querySelector('div.resp')
    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados!')
    }else {
        resp.innerHTML = 'Contando: '
        var i = Number(num1.value)
        var f = Number(num2.value)
        var p = Number(passo.value)
        if (p == 0) {
            window.alert ('Passo invalido. Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for( var c = i; c < f; c += p ) {
                resp.innerHTML += `${c} \u{1F449}`  
            }
        }else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                resp.innerHTML += `${c} \u{1F449}`
            }   
        }
         resp.innerHTML += `\u{1F499}`          
    }
}