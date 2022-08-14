function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resp = window.document.querySelector('div.resp')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Masculino'
            if (idade >= 0 && idade <15){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', 'imagens/moco.png')
            }else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/senhor2.png')
            }
        }else if (fsex[1].checked) {
            var genero = 'Feminino'
            if (idade >= 0 && idade <15){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
                
            }else if (idade <= 25){
                //jovem
                img.setAttribute('src', 'imagens/moca.png')
            }else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Detectamos ${genero}, com idade de ${idade} anos!`
        resp.appendChild(img)
    }
}