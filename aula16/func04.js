function fatorial(n){
    let fat = 1
    for (let c = n; c>0; c--){
        fat = fat*c
    } return fat
}

function fatorial1(n){
    let fat = 1
    while (n>0){
         fat = fat * n
         n--
    } return fat
}

console.log(fatorial(5))
console.log(fatorial1(5))