import React from "react";

function labelValor(label, valor) {
  return (
    <div>
      <span>
        {label}: {valor}
      </span>
    </div>
  );
}

export default function QtdVezesSorteados({ qtd }) {
  return (
    <div>
      <span>Quantidade de vezes sorteado:</span>
      {labelValor(0, qtd[0])}
      {labelValor(16, qtd[16])}
      {labelValor(17, qtd[17])}
      {labelValor(18, qtd[18])}
      {labelValor(19, qtd[19])}
      {labelValor(20, qtd[20])}
    </div>
  );
}
