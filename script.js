let res = document.getElementById('moeda')
let moedaInput = document.getElementById('valor')

function buscar() {
  fetch('https://brasilapi.com.br/api/cambio/v1/moedas')
    .then(response => response.json())
    .then(data => {
      // Procura a moeda pelo símbolo ou nome digitado
      const moedaEncontrada = data.find(item =>
        item.simbolo.toLowerCase() === moedaInput.value.toLowerCase() ||
        item.nome.toLowerCase() === moedaInput.value.toLowerCase()
      )
      if (moedaEncontrada) {
        res.innerHTML = `símbolo: ${moedaEncontrada.simbolo}<br>
                         nome: ${moedaEncontrada.nome}<br>
                         moeda: ${moedaEncontrada.tipo_moeda}`
      } else {
        res.innerHTML = 'Moeda não encontrada.'
      }
    })
    .catch(error => {
      res.innerHTML = 'Erro: ' + error
    });
}