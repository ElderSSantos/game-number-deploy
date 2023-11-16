let numeroSecreto = gerarNumeroSecreto();
let contadorErros = 0;

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 101);
}

function debug(event) {
  event.preventDefault();
  const respostaInput = document.getElementById('resposta');
  const valorChute = parseInt(respostaInput.value);

  if (valorChute === numeroSecreto) {
    let querContinuar = confirm('Parabéns, você acertou! Deseja continuar jogando?');
    if (querContinuar) {
      numeroSecreto = gerarNumeroSecreto();
      alert('Novo número aleatório gerado. Boa sorte na próxima rodada!');
      respostaInput.value = '';
      contadorErros = 0;
    } else {
      alert('Obrigado por jogar! Até a próxima.');
      window.close();
    }
  } else if (valorChute < numeroSecreto) {
    alert('Errou, o número é maior');
    incrementarContadorErros();
  } else if (valorChute > numeroSecreto) {
    alert('Errou, o número é menor');
    incrementarContadorErros();
  } else {
    alert('Opção inválida');
  }

  atualizarContador();
}

function incrementarContadorErros() {
  contadorErros++;
}

function atualizarContador() {
  const contadorInput = document.getElementById('contador');
  contadorInput.value = contadorErros;
}
