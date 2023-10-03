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
export const computeStats = (personajes, estado) => {
  return personajes.reduce((total, personaje) => {
    return personaje.status === estado ? total + 1 : total;
  }, 0);
};

