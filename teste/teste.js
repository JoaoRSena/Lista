
function somar () {
const primeiroNumero = document.getElementById('numer1')
const segundoNumero = document.getElementById('numer2')
const resultado = document.getElementById('result')
let n1 = Number(primeiroNumero.value)
let n2 = Number(segundoNumero.value)
let somou = n1 + n2
resultado.innerHTML = `a soma entre ${n1} e ${n2} é igual ${somou}`
}