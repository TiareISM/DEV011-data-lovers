import data from './data/rickandmorty/rickandmorty.js';
import { filterData, computeStats, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

// constantes
const dataRickAndMorty = data.results;
const mainContainer = document.querySelector("#root");// viasualizar la data
let cadenaData = dataRickAndMorty;
let itemHTML = renderItems(dataRickAndMorty);
let stats = computeStats(cadenaData);
const filterSelect = document.querySelector("#filter-select");//funcion filtro
const sortSelect = document.querySelector("#sort-select");// sortData
const inputCharacter = document.querySelector("#inputCharacter");//funcion buscar por nombre
const Vivo = document.querySelector('[data-testid="vivo"]');
const Muerto = document.querySelector('[data-testid="muerto"]');
const Desconocido = document.querySelector('[data-testid="desconocido"]');

// Asignar el evento de clic a cada tarjeta
const renderCards = () => {
  mainContainer.innerHTML = itemHTML; // Usar la variable actualizada
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (e) => toggleCard(e));
  });
};
const toggleCard = (event) => {
  const card = event.currentTarget;
  const frontal = card.querySelector('.cara_frontal');
  const trasera = card.querySelector('.cara_trasera');

  if (frontal.style.display === 'block') {
    frontal.style.display = 'none';
    trasera.style.display = 'block';
  } else {
    frontal.style.display = 'block';
    trasera.style.display = 'none';
  }
};
renderCards();
// funcion del filtro
filterSelect.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  const filteredData = filterData(dataRickAndMorty, "species", selectedValue);
  cadenaData = filteredData;
  itemHTML = renderItems(filteredData); // Actualizar itemHTML
  renderCards();
  estaditica();
});

//sortData
sortSelect.addEventListener("change", () => {
  const selectedValue = sortSelect.value;
  const sortedData = sortData(cadenaData, "name", selectedValue);
  itemHTML = renderItems(sortedData); // Actualizar itemHTML
  renderCards();
});
//funcion buscar por nombre
function searchByName() {
  const searchTerm = inputCharacter.value.trim().toLowerCase();
  const filteredData = cadenaData.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchTerm)
  );
  itemHTML = renderItems(filteredData); // Actualizar itemHTML
  mainContainer.innerHTML = itemHTML;
  renderCards();
}
inputCharacter.addEventListener("keyup", searchByName);

const estaditica = () => {
  stats = computeStats(cadenaData);
  // Mostrar los resultados en los elementos HTML
  Vivo.textContent = ` Vivos: ${stats.alive} `;
  Muerto.textContent = ` Muertos: ${stats.dead} `;
  Desconocido.textContent = ` Desconocidos: ${stats.unknown} `;
}
estaditica();
// reiniciar valores
document.addEventListener("DOMContentLoaded", function () {

  //boton de reinicio
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    resetAplication();
  });
  function resetAplication() {
    //limpiar filter
    const filterSelect = document.querySelector('#filter-select');
    filterSelect.value = 'all';
    //limpiar sort
    const sortSelect = document.querySelector('#sort-select');
    sortSelect.value = 'asc';
    //mostrar elementos en orden principal
    cadenaData = dataRickAndMorty;
    inputCharacter.value = '';
    itemHTML = renderItems(dataRickAndMorty); // Actualizar itemHTML
    renderCards();
    estaditica();
  }
});





