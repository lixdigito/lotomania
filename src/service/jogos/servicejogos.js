const valorMaximoJogo = 100;
const tamanhoJogo = 50;

function isNumeroRepetido(jogo, numero) {
  return jogo.includes(numero);
}

function gerarNumero() {
  return Math.floor(Math.random() * valorMaximoJogo);
}

function ordernarJogo(jogo) {
  return jogo.sort(function(a, b) {
    return a - b;
  });
}

export function criarjogo() {
  const jogo = [];

  while (jogo.length < tamanhoJogo) {
    const numero = gerarNumero();
    if (!isNumeroRepetido(jogo, numero)) jogo.push(numero);
  }
  return ordernarJogo(jogo);
}

export function isJogoRepetido(jogo1, jogo2) {
  for (let i = 0; i < jogo1.length; i++) {
    if (jogo1[i] - jogo2[i] !== 0) return false;
  }
  return true;
}

export function gerarListaJogos(tamanhoLista) {
  const listaJogos = [];

  while (listaJogos.length < tamanhoLista) {
    const jogo = criarjogo();

    if (!listaJogos.find(j => isJogoRepetido(j, jogo))) listaJogos.push(jogo);
  }
  return listaJogos;
}
