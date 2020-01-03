const ValorPremiacaoMedia = {
  16: 25,
  17: 150,
  18: 1620,
  19: 42220,
  20: 2300000,
  0: 98000
};

const reducer = (accumulator, currentValue) => accumulator + currentValue.total;

function calculaGanho(resultado, numAcertos) {
  return resultado[numAcertos]
    ? ValorPremiacaoMedia[numAcertos] * resultado[numAcertos]
    : 0;
}

export function GanhosPorResultado(resultado) {
  return {
    0: calculaGanho(resultado, 0),
    16: calculaGanho(resultado, 16),
    17: calculaGanho(resultado, 17),
    18: calculaGanho(resultado, 18),
    19: calculaGanho(resultado, 19),
    20: calculaGanho(resultado, 20)
  };
}

export function GanhoTotalPorResultado(ganhos) {
  return (
    ganhos[0] + ganhos[16] + ganhos[17] + ganhos[18] + ganhos[19] + ganhos[20]
  );
}

export function CalcularGanhos(resultados) {
  return resultados.map(resultado => {
    const ganhoPorResultado = GanhosPorResultado(resultado);
    const total = GanhoTotalPorResultado(ganhoPorResultado);
    return { ...ganhoPorResultado, total };
  });
}

export function GanhoTotalPorConjutoJogos(resultados) {
  return resultados.reduce(reducer, 0);
}
