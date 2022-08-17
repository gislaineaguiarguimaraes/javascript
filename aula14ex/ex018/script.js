function calcular() {
    var tnum = window.document.getElementById('txtn')
    var resp = window.document.getElementById('seltab')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else {
        let n = Number(tnum.value)
        let c = 1
        resp.innerHTML = ' '
        do {
            var item = window.document.createElement('option')
            var soma = n * c
            item.text = `${n} x ${c} = ${soma} `
            item.value = `resp${c}`
            resp.appendChild(item)
            c++
        } while (c <= 10)
    }
}


