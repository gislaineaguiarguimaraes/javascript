let num = [5,8,9,3,4]
num[5] = 1  // adiciona um novo elemento (1) na posição desejada (5).
num.push(7) //adiciona um novo elemento no final da lista
num.sort() //coloca a lista em ordem crescente.
num.length // Mostra quantos elemntos tem na lista.
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num[2]}`) //num[2], vai mostrar o elemento que esta na lista num na posição 2.
let pos = num.indexOf(7)
if (pos == -1) {
    console.log ('O valor não foi encontrado')
}else {
    console.log(`O valor esta na posição ${pos}`)
}
