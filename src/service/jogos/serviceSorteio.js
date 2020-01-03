import { numeroSorteados } from "../../assets/NumerosSorteados";

export function conferirSorteio(jogo, numerosSorteados) {
  return numerosSorteados.reduce(
    (acumulador, valorCorrente) =>
      jogo.includes(valorCorrente) ? acumulador + 1 : acumulador,
    0
  );
}

export function conferirListaJogos(listaJogos, numerosSorteados) {
  const resultado = {};
  listaJogos.forEach(jogo => {
    const numerAcertos = conferirSorteio(jogo, numerosSorteados);
    resultado[numerAcertos] = resultado[numerAcertos]
      ? resultado[numerAcertos] + 1
      : 1;
  });
  return resultado;
}

export function ConferierJogosSorteados(listaJogos) {
  return numeroSorteados.map(numeroSorteado =>
    conferirListaJogos(listaJogos, numeroSorteado)
  );
}

function QuantidadeSorteada(listaResultado, index) {
  return listaResultado.reduce((acumulador, valorCorrente) => {
    return valorCorrente[index]
      ? acumulador + valorCorrente[index]
      : acumulador;
  }, 0);
}

export function QuantidadeSorteadaPorListaJogos(listaResultados) {
  const resultado = {
    0: QuantidadeSorteada(listaResultados, 0),
    16: QuantidadeSorteada(listaResultados, 16),
    17: QuantidadeSorteada(listaResultados, 17),
    18: QuantidadeSorteada(listaResultados, 18),
    19: QuantidadeSorteada(listaResultados, 19),
    20: QuantidadeSorteada(listaResultados, 20)
  };
  return resultado;
}

export function QuantidadeTotalSorteadaPorListaJogos(
  quantidadeSorteadaPorNumero
) {
  return (
    quantidadeSorteadaPorNumero[0] +
    quantidadeSorteadaPorNumero[16] +
    quantidadeSorteadaPorNumero[17] +
    quantidadeSorteadaPorNumero[18] +
    quantidadeSorteadaPorNumero[19] +
    quantidadeSorteadaPorNumero[20]
  );
}
