var agora = new Date()
var hora = agora.getHours()

if (hora>=6 && hora<=12){
    per = 'Bom Dia!'
    console.log(`${per} O horario atual é ${hora} horas.`)
} else if (hora>12 && hora<=18) {
    per = 'Boa tarde!'
    console.log(`${per} O horario atual é ${hora} horas.`)
} else{
    per = 'Boa noite!'
    console.log(`${per} O horario atual é ${hora} horas.`)
}