

var foto = window.document.getElementsByClassName('foto')


function verificar() {
    var ano = new Date()
    var atual = ano.getFullYear()
    var nasc = window.document.getElementById('txtano')
    var resp = window.document.getElementsByClassName('resp')
    var idade = atual - nasc
    resp.innerHTML = `Sua idade é ${idade}`
}