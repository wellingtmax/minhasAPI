let mostrar = document.getElementById("resposta");
let busca = document.getElementById("verificar")

function buscar() {

    const cnpjBuscado = busca.value.trim();

  fetch("https://brasilapi.com.br/api/cvm/corretoras/v1")
    .then((Response) => Response.json())
    .then((corretoras) => {
       
        const empresa = corretoras.find(c => c.cnpj === cnpjBuscado);

    if(empresa) {
        mostrar.innerHTML = `
            <strong style="color: blue;">CNPJ:</strong> <span>${empresa.cnpj}</span><br> 
            <strong style="color: blue;">Nome Social:</strong> ${empresa.nome_social}<br> 
            <strong style="color: blue;">E-mail:</strong> ${empresa.email}<br> 
            <strong style="color: blue;">CEP:</strong> ${empresa.cep}<br> 
            <strong style="color: blue;">Logradouro::</strong> ${empresa.logradouro}<br> 
            <strong style="color: blue;">Telefone:</strong> ${empresa.telefone}<br> 
            <strong style="color: blue;">Patrimonio</strong> ${empresa.valor_patrimonio_liquido}<br> 
            <strong style="color: blue;">Status:</strong> <span style="color: red; font-size: 15px;  font-weight: bold;">${empresa.status}</span><br> 
            `;
            } else {
                mostrar.innerHTML = `Nenhuma corretora encontrada com esse CNPJ.`;
            }
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
        mostrar.innerHTML = `Erro ao buscar os dados.`;
      });
}
