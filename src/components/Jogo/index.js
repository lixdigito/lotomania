import React from "react";

import { Container } from "./style";

export default function Jogo({ jogo }) {
  return (
    <Container>
      {jogo.map((numero, index) => (
        <div className="numero" key={`numero-jogo-${index}`}>
          {numero},&nbsp;
        </div>
      ))}
    </Container>
  );
}
