import {
  conferirSorteio,
  conferirListaJogos,
  QuantidadeSorteadaPorListaJogos,
  QuantidadeTotalSorteadaPorListaJogos
} from "../serviceSorteio";

const numerosSorteados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("conferirSorteio", () => {
  it("Zero números sorteados", () => {
    expect(0).toEqual(conferirSorteio([10, 12], numerosSorteados));
  });

  it("Um número sorteados", () => {
    expect(1).toEqual(conferirSorteio([10, 6], numerosSorteados));
  });

  it("Dois números sorteados", () => {
    expect(2).toEqual(conferirSorteio([0, 2], numerosSorteados));
  });
});

describe("conferirListaJogos", () => {
  it("Nenhum número sorteado", () => {
    const listaJogos = [
      [10, 12],
      [10, 13],
      [11, 21]
    ];
    expect({ 0: 3 }).toEqual(conferirListaJogos(listaJogos, numerosSorteados));
  });

  it("Dois jogos com números dois jogos sorteados e um não sorterado", () => {
    const listaJogos = [
      [0, 2],
      [0, 3],
      [11, 21]
    ];
    expect({ 0: 1, 2: 2 }).toEqual(
      conferirListaJogos(listaJogos, numerosSorteados)
    );
  });

  it("Vários jogos", () => {
    const listaJogos = [
      [0, 2],
      [0, 31],
      [11, 21],
      [6, 7],
      [23, 24],
      [4, 9],
      [4, 5]
    ];
    expect({ 0: 2, 1: 1, 2: 4 }).toEqual(
      conferirListaJogos(listaJogos, numerosSorteados)
    );
  });
});

describe("QuantidadeSorteadaPorListaJogos", () => {
  it("Nenhum número sorteado", () => {
    const listaJogos = [
      { 10: 1, 1: 1, 2: 4 },
      { 10: 2, 1: 1, 2: 4 },
      { 10: 3, 1: 1, 2: 4 }
    ];
    const resultadoEsperado = {
      0: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0
    };
    expect(resultadoEsperado).toEqual(
      QuantidadeSorteadaPorListaJogos(listaJogos)
    );
  });

  it("Vários jogos", () => {
    const listaJogos = [
      { 0: 2, 16: 1, 20: 4 },
      { 0: 2, 16: 1, 20: 4 },
      { 0: 2, 1: 1, 20: 4 }
    ];
    const resultadoEsperado = {
      0: 6,
      16: 2,
      17: 0,
      18: 0,
      19: 0,
      20: 12
    };
    expect(resultadoEsperado).toEqual(
      QuantidadeSorteadaPorListaJogos(listaJogos)
    );
  });
});

describe("QuantidadeTotalSorteadaPorListaJogos", () => {
  it("Nenhum número sorteado", () => {
    const quantidadeSorteadaPorNumero = {
      0: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0
    };
    const resultadoEsperado = 0;
    expect(resultadoEsperado).toEqual(
      QuantidadeTotalSorteadaPorListaJogos(quantidadeSorteadaPorNumero)
    );
  });

  it("Vários jogos", () => {
    const quantidadeSorteadaPorNumero = {
      0: 6,
      16: 2,
      17: 0,
      18: 0,
      19: 0,
      20: 12
    };
    const resultadoEsperado = 20;
    expect(resultadoEsperado).toEqual(
      QuantidadeTotalSorteadaPorListaJogos(quantidadeSorteadaPorNumero)
    );
  });
});
