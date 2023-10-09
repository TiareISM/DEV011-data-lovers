// estas funciones son de ejemplo

export const filterData = (data, filterby, value) => {
  if (value === "all") {
    return data;
  }
  return data.filter((item) => {
    return item[filterby] === value;
  });
};

//funcion de ordenar asc y desc
export const sortData = (data, sortBy, sortOrder) => {
  //verificar si sortorder es asc o desc
  const dataorden = [...data];
  if (sortOrder === "asc") {
    dataorden.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  } else if (sortOrder === "desc") {
    dataorden.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return dataorden;
};
// funcion estdistica
export const computeStats = (personajes) => {
  const initialStats = {
    alive: 0,
    dead: 0,
    unknown: 0
  };
  const stats = personajes.reduce((acc, personaje) => {
    if (personaje.status === 'Alive') {
      acc.alive++;
    } else if (personaje.status === 'Dead') {
      acc.dead++;
    } else if (personaje.status === 'unknown') {
      acc.unknown++;
    }
    return acc;
  }, initialStats);
  // Convierte los conteos a números usando parseInt
  stats.alive = parseInt(stats.alive, 10);
  stats.dead = parseInt(stats.dead, 10);
  stats.unknown = parseInt(stats.unknown, 10);

  return stats;
};

