const menorValor = 1
const maiorValor = 20

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número secreto: ',numeroSecreto)

const menorNumero = document.getElementById('menor-valor')
menorNumero.innerHTML = menorValor

const maiorNumero = document.getElementById('maior-valor')
maiorNumero.innerHTML = maiorValor