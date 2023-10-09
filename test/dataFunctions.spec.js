import { computeStats, filterData, sortData } from '../src/dataFunctions.js';
import { data } from './data.js';

describe('filterData', () => {
  it('filtro por especie, en este caso humanos: 3', () => {
    const filteredData = filterData(data, 'species', 'Human');
    expect(filteredData.length).toBe(3);
  });
  it('filtro por especie, en este caso Poopybutthole: 1', () => {
    const filteredData = filterData(data, 'species', 'Poopybutthole');
    expect(filteredData.length).toBe(1);
  });
  it('retorna todos los valores de la data en valor "all"', () => {
    const filteredData = filterData(data, 'species', 'all');
    expect(filteredData.length).toBe(data.length);
  });
});

describe('sortData', () => {
  it('datos en orden descendente por orden de nombre', () => {
    const sortedData = sortData(data, 'name', 'desc');
    expect(sortedData[0].name).toBe('Rick Sanchez');
    expect(sortedData[1].name).toBe('Noob-Noob');
    expect(sortedData[2].name).toBe('Mrs. Sullivan');
    expect(sortedData[3].name).toBe('Morty Smith');
  });
  it('datos en orden ascendente por orden de nombre', () => {
    const sortedData = sortData(data, 'name', 'asc');
    expect(sortedData[0].name).toBe('Morty Smith');
    expect(sortedData[1].name).toBe('Mrs. Sullivan');
    expect(sortedData[2].name).toBe('Noob-Noob');
    expect(sortedData[3].name).toBe('Rick Sanchez');
  });
});

describe('computeStats', () => {
  it('calcule las estaditica del estado de los personajes correctamente', () => {
    const stats = computeStats(data);
    // Asumiendo que tienes datos específicos en tu archivo data.js
    expect(stats.alive).toBe(3);
    expect(stats.dead).toBe(1);
    expect(stats.unknown).toBe(0);
  });
});