/*/ Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
/*/

// Resolução
const r1 = document.querySelector('#print');
const r2 = document.querySelector('#print2');
const r3 = document.querySelector('#print3');

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

function numberStringDiff1() {
  return numeroUm !== stringUm ? 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.'
    : 'As variáveis numeroUm e stringUm não tem o mesmo valor.'
}
r1.innerHTML = numberStringDiff1()

function numberStringDiff2() {
  return numeroTrinta !== stringTrinta ? 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.'
    : 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.'
}
r2.innerHTML = numberStringDiff2()

function numberStringDiff3() {
  return numeroDez !== stringDez ? 'As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.'
    : 'As variáveis numeroDez e stringDez não tem o mesmo valor.'
}
r3.innerHTML = numberStringDiff3()