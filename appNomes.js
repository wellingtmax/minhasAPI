function nome() {
  let procurar1 = document.getElementById("procurar");
  let resultado1 = document.getElementById("resultado");

  let chama = procurar1.value;
  fetch("nomes.json")
    .then((response) => response.json())
    .then((data) => {
      // Procurar pelo nome
      let nome1 = data.find(({ name }) => name === chama);
      if(nome1){
        resultado1.innerHTML = `
        Nome: ${nome1.name}<br>
        CPF: ${nome1.CPF}<br>
        Cidade: ${nome1.city}<br>
        Idades: ${nome1.age} anos<br>
        E-mail: ${nome1.email}`;
      } else {
        resultado1.innerHTML = `Nome não encontrado!`;
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados:", error);
    });
}
