import data from './data/rickandmorty/rickandmorty.js';
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';


const dataRickAndMorty = data.results; 
//console.log(dataRickAndMorty);
const mainContainer = document.getElementById("container");
mainContainer.innerHTML = renderItems(dataRickAndMorty);
//renderItems(dataRickAndMorty)

//funcion filtro
const filterSelect = document.getElementById("filter-select");
filterSelect.addEventListener("change", () => {
  const selectedValue = filterSelect.value;
  const filteredData = filterData(dataRickAndMorty, "species", selectedValue);
  mainContainer.innerHTML = renderItems(filteredData); 
});

//sortData
const sortSelect = document.getElementById("sort-select");
sortSelect.addEventListener("change", () => {
  const selectedValue = sortSelect.value;
  const sortedData = sortData(dataRickAndMorty, "name", selectedValue);
  mainContainer.innerHTML = renderItems(sortedData);
});
document.addEventListener("DOMContentLoaded", function(){
  //boton de reinicio
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  clearButton.addEventListener('click', () => {
    resetAplication();
  });
  function resetAplication () {
    //console.log('resetAplication');
    //limpiar filter
    const filterSelect = document.getElementById('filter-select');
    filterSelect.value = 'all';
    //limpiar sort
    const sortSelect = document.getElementById('sort-select');
    sortSelect.value = 'asc';
    //mostrar elementos en orden principal
    const mainContainer = document.getElementById('container');
    mainContainer.innerHTML = renderItems(dataRickAndMorty);
  }
});

//funcion buscar por nombre
const searchInput = document.getElementById("inputCharacter");
const searchResults = document.getElementById("search-results");
const originalResults = searchResults.innerHTML; //almacena el estado original del resultado de busqueda

searchInput.addEventListener("keyup", () => {
  const searchText = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  //si el campo esta vacio volver a los resultados originales
  if (searchText === "") {
    searchResults.innerHTML = originalResults;
    return;
  }
  const filterData = dataRickAndMorty.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchText)
  );
  filterData.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
  <img src="${character.image}" alt="${character.name}" />
  <span>${character.name}</span>
`;
    searchResults.appendChild(listItem);
  });
});


