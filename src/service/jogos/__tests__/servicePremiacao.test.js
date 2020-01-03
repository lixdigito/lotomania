import {
  GanhosPorResultado,
  GanhoTotalPorResultado,
  CalcularGanhos,
  GanhoTotalPorConjutoJogos
} from "../ServicePremiacao";

describe("GanhosPorResultado", () => {
  it("nenhum jogo premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6 };
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  0 premiado", () => {
    const resultadoSorteio = { 0: 1, 14: 10, 15: 6 };
    const resultadoCalculado = { 0: 98000, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  16 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 16: 1 };
    const resultadoCalculado = { 0: 0, 16: 25, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  17 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 17: 1 };
    const resultadoCalculado = { 0: 0, 16: 0, 17: 150, 18: 0, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  18 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 18: 1 };
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 1620, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  19 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 19: 1 };
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 0, 19: 42220, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("um jogo de  20 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 20: 1 };
    const resultadoCalculado = {
      0: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 2300000
    };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
  it("2 jogo de  18 premiado", () => {
    const resultadoSorteio = { 14: 10, 15: 6, 18: 2 };
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 3240, 19: 0, 20: 0 };
    expect(resultadoCalculado).toEqual(GanhosPorResultado(resultadoSorteio));
  });
});

describe("GanhoTotalPorResultado", () => {
  it("nenhum jogo premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(0).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  0 premiado", () => {
    const resultadoCalculado = { 0: 98000, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(98000).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  16 premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 25, 17: 0, 18: 0, 19: 0, 20: 0 };
    expect(25).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  17 premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 0, 17: 150, 18: 0, 19: 0, 20: 0 };
    expect(150).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  18 premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 1620, 19: 0, 20: 0 };
    expect(1620).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  19 premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 0, 17: 0, 18: 0, 19: 42220, 20: 0 };
    expect(42220).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("um jogo de  20 premiado", () => {
    const resultadoCalculado = {
      0: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 2300000
    };
    expect(2300000).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
  it("2 jogo de  18 e 1 de 16 premiado", () => {
    const resultadoCalculado = { 0: 0, 16: 25, 17: 0, 18: 3240, 19: 0, 20: 0 };
    expect(3265).toEqual(GanhoTotalPorResultado(resultadoCalculado));
  });
});

describe("CalcularGanhos", () => {
  it("nenhum jogo premiado", () => {
    const resultadosJogos = [
      {
        5: 4,
        6: 26,
        7: 33,
        8: 58,
        9: 106,
        10: 124,
        11: 108,
        12: 72,
        13: 53,
        14: 10,
        15: 6
      },
      {
        4: 1,
        5: 7,
        6: 18,
        7: 42,
        8: 62,
        9: 104,
        10: 124,
        11: 88,
        12: 85,
        13: 46,
        14: 16,
        15: 4
      },
      {
        4: 1,
        5: 5,
        6: 15,
        7: 44,
        8: 80,
        9: 104,
        10: 110,
        11: 93,
        12: 79,
        13: 47,
        14: 16,
        15: 4
      }
    ];
    const resultadoCalculado = [
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 }
    ];
    expect(resultadoCalculado).toEqual(CalcularGanhos(resultadosJogos));
  });
  it("jogos premiados", () => {
    const resultadosJogos = [
      {
        14: 10,
        15: 6,
        16: 1,
        17: 2
      },
      {
        14: 16,
        15: 4,
        19: 1
      },
      {
        0: 1,
        4: 1,
        5: 5,
        6: 15,
        20: 2
      }
    ];
    const resultadoCalculado = [
      { 0: 0, 16: 25, 17: 300, 18: 0, 19: 0, 20: 0, total: 325 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 42220, 20: 0, total: 42220 },
      { 0: 98000, 16: 0, 17: 0, 18: 0, 19: 0, 20: 4600000, total: 4698000 }
    ];
    expect(resultadoCalculado).toEqual(CalcularGanhos(resultadosJogos));
  });
});

describe("GanhoTotalPorConjutoJogos", () => {
  it("nenhum jogo premiado", () => {
    const resultadoCalculado = [
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, total: 0 }
    ];
    expect(0).toEqual(GanhoTotalPorConjutoJogos(resultadoCalculado));
  });
  it("jogos premiados", () => {
    const resultadoCalculado = [
      { 0: 0, 16: 25, 17: 300, 18: 0, 19: 0, 20: 0, total: 325 },
      { 0: 0, 16: 0, 17: 0, 18: 0, 19: 42220, 20: 0, total: 42220 },
      { 0: 98000, 16: 0, 17: 0, 18: 0, 19: 0, 20: 4600000, total: 4698000 }
    ];
    expect(4740545).toEqual(GanhoTotalPorConjutoJogos(resultadoCalculado));
  });
});
