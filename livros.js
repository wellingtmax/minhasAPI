function buscarLivro() {
  const titulo = document.getElementById('tituloInput').value.trim();
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = "Buscando...";

  if (!titulo) {
    resultadoDiv.innerText = "Por favor, informe um título.";
    return;
  }

  const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(titulo)}&limit=1`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('Erro ao buscar livro.');
      return response.json();
    })
    .then(data => {
      if (data.numFound === 0 || !data.docs.length) {
        resultadoDiv.innerText = "Nenhum livro encontrado.";
        return;
      }

      const livro = data.docs[0];
      const tituloLivro = livro.title || 'Sem título';
      const autor = livro.author_name ? livro.author_name.join(', ') : 'Autor desconhecido';
      const ano = livro.first_publish_year || 'Ano desconhecido';

      // Imagem da capa
      let capaHTML = '';
      if (livro.cover_i) {
        capaHTML = `<img src="https://covers.openlibrary.org/b/id/${livro.cover_i}-L.jpg" alt="Capa do livro" style="width:200px;">`;
      } else {
        capaHTML = 'Sem imagem de capa disponível.';
      }

      resultadoDiv.innerHTML = `
        <h3 style="font-size: 2.5rem; margin-top: 10px;">${tituloLivro}</h3><br>
        <p><strong>Autor(es):</strong> ${autor}</p>
        <p><strong>Ano de publicação:</strong> ${ano}</p><br>
        ${capaHTML}
      `;
    })
    .catch(error => {
      resultadoDiv.innerText = error.message;
    });
}
