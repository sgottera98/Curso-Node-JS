const x = '10'

//checar se x é um numero
if(!Number.isInteger(x)) {
    throw new Error('o valor de x nao e um inteiro')
}

console.log('continuando o codigo');