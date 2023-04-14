import { checkOpposite } from "./checkOpposite";

export const checkSquares = (colAumns, length) => {
  const horizontal = [];
  for (let ind in colAumns[0]) {
    const i = Number(ind);
    for (let row of colAumns) {
      horizontal.push(row[i]);
    }
  }
  for (let num in horizontal) {
    const ind = Number(num);
    const value = horizontal[ind];
    const colA = ind % length;
    const rowA = Math.floor(ind / length);
    const depth = (Math.min(length - colA, length - rowA) - 1) * 2;
    if ([value, depth].some((n) => !n)) continue;
    const first = length + 1;    
    const numsToCheck = [first];
    for (let i = 0; i <= depth; i++) {
      for (let checks of numsToCheck) {
        if (value === horizontal[checks + ind + i * first]) {
          const matchB = checks + ind + i * first;
          const colB = matchB % length;
          const rowB = Math.floor(matchB / length);
          const newValues = checkOpposite([rowA, colA], [rowB, colB],length);
          if (newValues) {
            const firstVerticeInFlat =
              horizontal[newValues[0] * length + newValues[1]];
            const secondVerticeInFlat =
              horizontal[newValues[2] * length + newValues[3]];
            if (firstVerticeInFlat === value && secondVerticeInFlat === value) {
              return [
                [rowA, colA],
                [newValues[0], newValues[1]],
                [rowB, colB],
                [newValues[2], newValues[3]],
              ];
            }
          }
        }
      }      
      const numToAdd = numsToCheck[0] - 2;
      if (numsToCheck.length <= depth) {
        numsToCheck.unshift(numToAdd);
      } 
      
    }
  }
};
