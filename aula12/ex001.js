var idade = 60
if (idade<16){
    console.log('Não vota.')
} else if ((idade>=16 && idade<18) || idade>=65){
        console.log('Seu voto é opcional.')
    } else{
        console.log('Seu voto é obrigatório')
    }