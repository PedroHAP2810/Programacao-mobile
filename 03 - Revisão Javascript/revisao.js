// Comentario de uma linha

/*
Comentário
em
bloco
*/


// Variáveis
const nome = "Pedro"
let idade = 21
const maiorDeIdade = true

console.log(nome)
console.log(idade)
console.log("É maior de idade? ", maiorDeIdade) 

// nome = "Teste"
idade = 19
console.log(idade)

//Operadores Aritiméticos
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 4 / 2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

const resto = 3 % 2
let numero = 4
console.log("RESTO -> ", resto)

const incremento = numero++ // + 1
console.log("INCREMENTO -> ", incremento)

const decremento = numero-- // - 1
console.log("DECREMENTO -> ", decremento)


let a = 3

a %= 2

console.log(a)

// Operadores de Comparação
const igual = 10 == '10'
console.log(igual)
const estritamenteIgual = 10 === '10'
console.log(estritamenteIgual)

const maior = 3 > 2 // true
const menor = 2 < 3 // false
const maiorOuIgual = 3 >= 2 // true
const menorOuIgual = 2 <= 3 // false

 if (idade >- 18) {
    console.log("Maior de Idade")
 } else {
    console.log("Menor de Idade")
 }

 if (idade >= 18) {
    console.log("Maior de idade")
 } else {
    console.log("Menor de idade")
 }

 if (idade >= 18) {
    console.log("Maior de idade")
 } else if(idade < 18) {
    console.log("Menor de idade")
 } else {
    console.log("Valor inválido")
 }

 // Operador ternário
 const checkMaiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
 console.log(checkMaiorDeIdade)
 
 function checkMaiorDeIdade(idade){
    if(idade <= 18){
        console.log("Menor de idade")
        
    }
 }