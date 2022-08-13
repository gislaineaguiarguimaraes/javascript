var dia = new Date ()
var hora = dia.getHours()
var hora = 13
function carregar() {
    var msg = window.document.querySelector('div.msg')
    var img = window.document.querySelector('img.imagem')
    var corpo = window.document.body
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12) {
        msg.innerHTML +=  'Bom dia !'
        img.src = 'imagens/manha1.jpg'
        corpo.style.background = "orange"
    }else if (hora >= 12 && hora <= 18){
        msg.innerHTML +=  'Boa tarde !'
        img.src = 'imagens/tarde1.jpg'
        corpo.style.background = "#FAB66F"
    }else {
        msg.innerHTML +=  'Boa noite !'
        img.src = 'imagens/noite1.jpg'
        corpo.style.background = "#173250"
    }
    
}
     


