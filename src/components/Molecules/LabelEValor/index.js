import React from "react";
import { Container } from "./Style";

export default function LabelEValor({ label, valor }) {
  return (
    <Container>
      <h5>{label} :</h5>
      <div>&nbsp;{valor}</div>
    </Container>
  );
}
