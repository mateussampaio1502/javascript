let amigo = {nome: 'jose',
sexo: 'M',
peso: 85,
engordar(p=0){
    console.log('Engordamento')
    this.peso += p
}
}

amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso}, ele engordou ${amigo.peso - 85}kg`)