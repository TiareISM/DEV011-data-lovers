import data from './data/rickandmorty/rickandmorty.js';
//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

const dataRickAndMorty = data.results; 
//console.log(dataRickAndMorty);

const mainContainer = document.getElementById("container")
mainContainer.innerHTML = renderItems(dataRickAndMorty);

//renderItems(dataRickAndMorty)





