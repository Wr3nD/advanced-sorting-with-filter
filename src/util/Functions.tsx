type mainObject = {
  id: string;
  name: string;
  ident: string;
};

export const sortById = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];
  answer = [...data]?.sort((a: mainObject, b: mainObject) => {
    if (filterSide) {
      return a.id.localeCompare(b.id);
    } else {
      return b.id.localeCompare(a.id);
    }
  });
  return answer;
};

export const sortByIdent = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];

  answer = [...data]?.sort((a: mainObject, b: mainObject) => {
    if (filterSide) {
      return a.ident.localeCompare(b.ident);
    } else {
      return b.ident.localeCompare(a.ident);
    }
  });

  return answer;
};

export const sortByName = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];

  answer = [...data]?.sort((a: mainObject, b: mainObject) => {
    if (filterSide) {
      return a.name.localeCompare(b.name, undefined, { numeric: true });
    } else {
      return b.name.localeCompare(a.name, undefined, { numeric: true });
    }
  });
  return answer;
};
