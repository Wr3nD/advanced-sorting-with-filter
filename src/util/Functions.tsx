type mainObject = {
  id: string;
  name: string;
  ident: string;
};
const getNumberFromId = (id: string): number | null => {
  const match = id.match(/id(\d+)/); // match the first sequence of numbers
  if (match && match[1]) {
    return parseInt(match[1], 10);
  }
  return null;
};
const getNumberFromString = (str: string): number | null => {
  const match = str.match(/(\d+)$/); // Match the last sequence of numbers
  if (match && match[1]) {
    // verify if match[1] got a clear numbers without id
    return parseInt(match[1], 10);
  }
  return null;
};

export const sortById = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];
  if (filterSide) {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      const aNum = getNumberFromId(a.id);
      const bNum = getNumberFromId(b.id);

      if (aNum !== null && bNum !== null) {
        return aNum - bNum; // Sort based on numbers
      } else if (aNum === null && bNum === null) {
        return 0; // equal
      } else if (aNum === null) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      const aNum = getNumberFromId(a.id);
      const bNum = getNumberFromId(b.id);

      if (aNum !== null && bNum !== null) {
        return bNum - aNum;
      } else if (aNum === null && bNum === null) {
        return 0;
      } else if (aNum === null) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  return answer;
};

export const sortByIdent = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];
  if (filterSide) {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      return a.ident.localeCompare(b.ident); // Sort based on ident in ascending order
    });
  } else {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      return b.ident.localeCompare(a.ident); // Sort based on ident in descending order
    });
  }
  return answer;
};

export const sortByName = (data: mainObject[], filterSide: boolean) => {
  let answer: mainObject[] = [];
  if (filterSide) {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      const aNum = getNumberFromString(a.name);
      const bNum = getNumberFromString(b.name);

      if (aNum !== null && bNum !== null) {
        return aNum - bNum;
      } else if (aNum === null && bNum === null) {
        return 0;
      } else if (aNum === null) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    answer = [...data]?.sort((a: mainObject, b: mainObject) => {
      const aNum = getNumberFromString(a.name);
      const bNum = getNumberFromString(b.name);

      if (aNum !== null && bNum !== null) {
        return bNum - aNum; // reverse
      } else if (aNum === null && bNum === null) {
        return 0; // Equal !
      } else if (aNum === null) {
        return 1; //aNum is null , bNum has a number => is sorted before aNum
      } else {
        return -1; // bNum is null, aNum has a number => is sorted before bNum
      }
    });
  }
  return answer;
};
