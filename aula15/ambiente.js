let num = [1, 2, 3] //define o vetor
num[3] = 17 // insere o número 17 na posição 3 (começa em 0)
num.push(25) //insere o 25 na última posição
num.sort((a, b) => a - b) //organiza em ordem crescente

console.log(`O vetor é [${num}]`)

let tam = num.length //define uma variável que mostra o tamanho do vetor
console.log(`O tamanho do vetor é ${tam}`)
console.log(`O primeiro número é ${num[0]}`) // mostra o primeiro número (posição 0)

//imprimindo na tela todos os número de forma dinâmica:

/*
for (let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
*/

// otimizando

for (let pos in num){
    console.log(num[pos])
}

let pos = num.indexOf(17) //verficar se há o número 17 e qual sua posição