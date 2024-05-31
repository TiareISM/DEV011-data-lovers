import data from "./data/rickandmorty/rickandmorty.js";
import { filterData, computeStats, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

// Constantes
const dataRickAndMorty = data.results;
const mainContainer = document.querySelector("#root");
let cadenaData = dataRickAndMorty;
let itemHTML = renderItems(dataRickAndMorty);
const filterSelect = document.querySelector("#filter-select");
const sortSelect = document.querySelector("#sort-select");
const inputCharacter = document.querySelector("#inputCharacter");
const Vivo = document.querySelector('[data-testid="vivo"]');
const Muerto = document.querySelector('[data-testid="muerto"]');
const Desconocido = document.querySelector('[data-testid="desconocido"]');

// Función para renderizar las tarjetas
const renderCards = () => {
  mainContainer.innerHTML = itemHTML;
};

// Función del filtro
filterSelect.addEventListener("change", () => {
  const selectedValue = filterSelect.value;
  const filteredData = filterData(dataRickAndMorty, "species", selectedValue);
  cadenaData = filteredData;
  itemHTML = renderItems(filteredData);
  renderCards();
  updateStats();
});

// Función para ordenar
sortSelect.addEventListener("change", () => {
  const selectedValue = sortSelect.value;
  const sortedData = sortData(cadenaData, "name", selectedValue);
  itemHTML = renderItems(sortedData);
  renderCards();
});

// Función para buscar por nombre
function searchByName() {
  const searchTerm = inputCharacter.value.trim().toLowerCase();
  const filteredData = cadenaData.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchTerm)
  );
  itemHTML = renderItems(filteredData);
  mainContainer.innerHTML = itemHTML;
  renderCards();
}

inputCharacter.addEventListener("keyup", searchByName);

// Función para actualizar las estadísticas
function updateStats() {
  const stats = computeStats(cadenaData);
  Vivo.textContent = ` Vivos: ${stats.alive} `;
  Muerto.textContent = ` Muertos: ${stats.dead} `;
  Desconocido.textContent = ` Desconocidos: ${stats.unknown} `;
}

// Función para reiniciar valores
document.addEventListener("DOMContentLoaded", function () {
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener("click", resetApplication);

  function resetApplication() {
    filterSelect.value = "all";
    sortSelect.value = "asc";
    cadenaData = dataRickAndMorty;
    inputCharacter.value = "";
    itemHTML = renderItems(dataRickAndMorty);
    renderCards();
    updateStats();
  }
  renderCards();
});

// Inicializar estadísticas
updateStats();
