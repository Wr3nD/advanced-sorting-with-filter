type mainObject = {
  id: string;
  name: string;
  ident: string;
};

export const sortById = (
  data: mainObject[],
  ascendingOrder: boolean,
  filteredData: mainObject[]
) => {
  let answer: mainObject[] = [];
  let filteredArray = filteredData.length > 0 ? filteredData : data;
  answer = [...filteredArray]?.sort((a: mainObject, b: mainObject) => {
    if (ascendingOrder) {
      return a.id.localeCompare(b.id);
    } else {
      return b.id.localeCompare(a.id);
    }
  });
  return answer;
};

export const sortByIdent = (
  data: mainObject[],
  ascendingOrder: boolean,
  filteredData: mainObject[]
) => {
  let answer: mainObject[] = [];
  let filteredArray = filteredData.length > 0 ? filteredData : data;
  answer = [...filteredArray]?.sort((a: mainObject, b: mainObject) => {
    if (ascendingOrder) {
      return a.ident.localeCompare(b.ident);
    } else {
      return b.ident.localeCompare(a.ident);
    }
  });

  return answer;
};

export const sortByName = (
  data: mainObject[],
  ascendingOrder: boolean,
  filteredData: mainObject[]
) => {
  let answer: mainObject[] = [];
  let filteredArray = filteredData.length > 0 ? filteredData : data;
  answer = [...filteredArray]?.sort((a: mainObject, b: mainObject) => {
    if (ascendingOrder) {
      return a.name.localeCompare(b.name, undefined, { numeric: true });
    } else {
      return b.name.localeCompare(a.name, undefined, { numeric: true });
    }
  });
  return answer;
};
