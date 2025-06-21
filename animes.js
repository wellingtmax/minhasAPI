async function buscarAnimes() {
  try {
    const mostrar = document.getElementById('mostrarAnimes');
    const animes = await fetch('animes_200.json');
    const arquivo = await animes.json();

    let conteudoHTML = '';

    arquivo.forEach(anime => {
      conteudoHTML += `
        <div class="card">
          <img src="${anime.url}" alt="${anime.titulo}">
          <h2>${anime.titulo}</h2>
          <p>Nota: ${anime.nota}</p>
        </div>
      `;
    });

    mostrar.innerHTML = conteudoHTML;

  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
}


