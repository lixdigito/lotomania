import React from "react";
import Jogo from "../Jogo";

export default function ListaJogos({ lista }) {
  return lista.map((jogo, index) => {
    return (
      <div key={`lista-jogo-${index}`}>
        <Jogo jogo={jogo} />
      </div>
    );
  });
}
