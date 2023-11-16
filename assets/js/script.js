window.onload = function() {
    alert('Bem Vindo!\nEste é um jogo de adivinhação, onde você tem 10 tentativas para tentar adivinhar o número escolhido aleatoriamente entre 1 e 100, boa sorte! :)');
};


let numeroSecreto = gerarNumeroSecreto();
let contadorErros = 0;

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 101);
}

function debug(event) {
  event.preventDefault();
  const respostaInput = document.getElementById('resposta');
  const valorChute = parseInt(respostaInput.value);

  if (contadorErros >= 10) {
    let tentativasMaximas = confirm('Que pena, você já teve seu número máximo de tentativas, tente novamente, deseja iniciar uma nova partida?');
    if (tentativasMaximas) {
      numeroSecreto = gerarNumeroSecreto();
      alert('Novo número aleatório gerado. Boa sorte na próxima rodada!');
      respostaInput.value = '';
      contadorErros = 0;
    } else {
      alert('Obrigado por jogar! Até a próxima.');
      window.close();
    }
  }
  
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


