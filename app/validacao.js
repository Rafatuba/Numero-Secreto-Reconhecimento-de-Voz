function verificaValorValido() {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    if (chute === "game over") {
      document.body.innerHTML = `
        <img src="./img/teddy-bear.png" alt="urso chateado">
        <h2>Game Over!</h2>
        <button class="botao" onClick="recarregarPagina()">Jogar novamente</button>
        `;
      document.body.style.backgroundColor = "black";
      recognition.addEventListener("end", () => {
        recognition.stop();
      });
    } else {
      elementoChute.innerHTML += `<div>Fale apenas números!!!<div>`;
    }
    return;
  }

  if (valorPermitido(numero)) {
    elementoChute.innerHTML += `<div>O número deve ser de ${menorValor} a ${maiorValor}<div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <img src="./img/birthday.png" alt="urso feliz">
    <h2>Você acertou!</h2>
    <h3>O número secreto é: ${numeroSecreto}</h3>
    <h2>PARABÉNS!!!</h2>
    <button class="botao" onClick="recarregarPagina()">Jogar novamente</button>
    `
    confetti();
    recognition.addEventListener("end", () => {
      recognition.stop();
    });
  }

  if (numero < numeroSecreto) {
    elementoChute.innerHTML += `<div>O número é maior <i class="fa-solid fa-up-long"></i><div>`;
  } else {
    elementoChute.innerHTML += `<div>O número é menor <i class="fa-solid fa-down-long"></i><div>`;
  }
  return;
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function valorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function recarregarPagina() {
  window.location.reload();
}
