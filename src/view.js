// estas funciones son de ejemplo
export const renderItems = (data) => {
  const ul = document.createElement('ul') 
  ul.setAttribute('class', 'ultarjetas');
  const itemHTML = data.map((item) => {
    return `
    <li itemscope itemtype="rickandmorty" class="card" ">
        <!-- Tarjeta frontal -->
        <div class="cara_frontal">
            <img itemprop="image" src="${item.image}" alt="${item.name}" />
            <p class="nombre"><strong itemprop="name" >${item.name}</strong></p>
            <p class="estado"><strong itemprop="status">Status:</strong> ${item.status}</p>
        
        </div>
        <!-- Tarjeta trasera -->
        <div class="cara_trasera" style="display: none;">
          <p><strong>Información adicional:</strong></p>
          <p><strong>Name:</strong> ${item.name}</p>
          <p><strong>Status:</strong> ${item.status}</p>
          <p><strong>Species:</strong> ${item.species}</p>
          <p><strong>Type:</strong> ${item.type}</p>
          <p><strong>Gender:</strong> ${item.gender}</p>
          <p><strong>Origin:</strong> ${item.origin.name}</p>
          <p><strong>Location:</strong> ${item.location.name}</p>
          <p><strong>Episodes:</strong> ${item.episode.length}</p>
        </div>
      </li>`;
  });
  ul.innerHTML = itemHTML.join('');
  return ul.outerHTML;
};

