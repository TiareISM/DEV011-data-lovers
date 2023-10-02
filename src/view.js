// estas funciones son de ejemplo
export const renderItems = (data) => {
  const itemHTML = data.map((item) => {
    return `
    <div itemscope itemtype="rickandmorty" class="card" style="width: 200px; margin: 10px; cursor: pointer;">
        <!-- Tarjeta frontal -->
        <div class="cara_frontal">
          <ul>
            <img itemprop="image" src="${item.image}" alt="${item.name}" />
            <li class="nombre"><strong itemprop="name" >${item.name}</strong></li>
            <li class="estado"><strong itemprop="status">Status:</strong> ${item.status}</li>
          </ul>
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
      </div>`;
  });
  return itemHTML.join('');
};

