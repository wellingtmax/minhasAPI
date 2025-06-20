let valor = document.getElementById("res");

function total() {
  fetch("https://brasilapi.com.br/api/taxas/v1")
    .then((response) => response.json())
    .then((data) => {
      const selic = data.find((taxa) => taxa.nome === "SELIC");
      let texto = "";

      data.forEach((taxa) => {
        texto += `${taxa.nome}: ${taxa.valor}% (Data: ${taxa.data})\n`;
      });

      if (selic) {
        texto += `\n>> A taxa SELIC é: ${selic.valor}%`;
      }

      valor.innerText = texto;
    })
    .catch((error) => {
      console.error("Erro ao consumir a API:", error);
      valor.innerText = "Erro ao carregar as taxas.";
    });
}

