import axios from "axios";

export async function baixarHistoricoJogos() {
  const resposta = await axios.get(
    "http://www1.caixa.gov.br/loterias/_arquivos/loterias/D_lotoma.zip",
    {
      withCredentials: true,
      auth: {
        username: "usuario",
        password: "password"
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods":
          "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
      }
    }
  );

  console.log(resposta);

  return resposta;
}
