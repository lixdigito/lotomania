import React, { useState, useEffect } from "react";
import ListaJogos from "../../components/ListaJogos";
import TotalVezesSorteado from "../../components/TotalVezesSorteado";
import QtdVezesSorteados from "../../components/QtdVezesSorteados";
import { gerarListaJogos } from "../../service/jogos/servicejogos";
import {
  ConferierJogosSorteados,
  QuantidadeSorteadaPorListaJogos,
  QuantidadeTotalSorteadaPorListaJogos
} from "../../service/jogos/serviceSorteio";

function gerarjogoVerificado(qtdJogos) {
  const listaJogosInicial = gerarListaJogos(qtdJogos);
  const jogosSorteadosInicial = ConferierJogosSorteados(listaJogosInicial);
  const quantidadeNumerosInicial = QuantidadeSorteadaPorListaJogos(
    jogosSorteadosInicial
  );
  const totalVezesSorteadoInicial = QuantidadeTotalSorteadaPorListaJogos(
    quantidadeNumerosInicial
  );
  const listaResutladosIncial = {
    listaJogos: listaJogosInicial,
    totalVezesSorteado: totalVezesSorteadoInicial,
    quantidadeNumeros: quantidadeNumerosInicial
  };
  return listaResutladosIncial;
}

export default function PaginaPrincipal() {
  const [tamnhoListaJogos, setTamanhoListaJogos] = useState(20);
  const listaResutladosIncial = gerarjogoVerificado(tamnhoListaJogos);
  const [valorInput, setValorInput] = useState(20);
  const [listaResutlados, setResultado] = useState([listaResutladosIncial]);
  const [jogoAtual, setjogoAtual] = useState(listaResutladosIncial);
  const [novoJogo, setNovoJogo] = useState(listaResutladosIncial);

  useEffect(() => {
    if (novoJogo.totalVezesSorteado >= jogoAtual.totalVezesSorteado) {
      setResultado(old => [...old, novoJogo]);
      setjogoAtual(novoJogo);
    }
  }, [jogoAtual.totalVezesSorteado, novoJogo, novoJogo.totalVezesSorteado]);

  setTimeout(() => {
    setNovoJogo(gerarjogoVerificado(tamnhoListaJogos));
  }, 1000);

  const handleClick = () => {
    const valor = parseInt(valorInput, 10);
    setTamanhoListaJogos(valor > 0 && valor < 11000 ? valor : 20);
    const novaLista = gerarjogoVerificado(tamnhoListaJogos);
    setjogoAtual(novaLista);
    setResultado([novaLista]);
  };
  const atualizaTamanhoLista = e => setValorInput(e.target.value);

  return (
    <div>
      <h1>Lotomania</h1>
      <input
        type="text"
        placeholder={valorInput}
        onChange={atualizaTamanhoLista}
      ></input>
      <button onClick={handleClick}>Qtd jogos</button>
      {listaResutlados.map((resul, index) => (
        <div key={`resutaldo-final-${index}`}>
          <ListaJogos lista={resul.listaJogos} />
          <TotalVezesSorteado total={resul.totalVezesSorteado} />
          <QtdVezesSorteados qtd={resul.quantidadeNumeros} />
        </div>
      ))}
    </div>
  );
}
