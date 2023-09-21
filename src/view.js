// estas funciones son de ejemplo

export const renderItems = (data) => {
  const itemHTML = data.map((item)=> {
    return `
    <div class="character">
      <p><strong>Name:</strong> ${item.name}</p>
      <p><strong>Status:</strong> ${item.status}</p>
      <p><strong>Species:</strong> ${item.species}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <p><strong>Gender:</strong> ${item.gender}</p>
      <p><strong>Origin:</strong> ${item.origin.name}</p>
      <p><strong>Location:</strong> ${item.location.name}</p>
      <img src="${item.image}" alt="${item.name}" />
      <p><strong>Episodes:</strong> ${item.episode.length}</p>
    </div>`;

  });
  return itemHTML.join('');
};

