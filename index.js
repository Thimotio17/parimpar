const prompt = require('prompt-sync')()
const parimpar = require("./parimpar.js")

const numero = prompt("Digite um numero: ")

let retorno = parimpar.ehParouImpar(numero)

console.log(retorno)
