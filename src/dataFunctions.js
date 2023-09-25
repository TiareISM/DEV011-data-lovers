// estas funciones son de ejemplo

export const filterData = (data, filterby, value) => {
  return data.filter((item) => {
    return item[filterby] === value;
  });
};

//funcion de ordenar asc y desc
export const sortData = (data, sortBy, sortOrder) => {
//verificar si sortorder es asc o desc
  if (sortOrder === "asc") {
    data.sort((a,b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  } else if (sortOrder=== "desc") {
    data.sort((a,b) => {
      if(a[sortBy] > b[sortBy]){
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return data;
};
