export const getLinesArr = (arr) => {
  const vertical = arr.map((r) => {
    return r.map((c) => c);
  });
  const horizontal = [];
  for (let ind in vertical[0]) {
    const i = Number(ind);
    let localArr = [];
    for (let row of vertical) {
      localArr.push(row[i]);
    }
    horizontal.push(localArr);
  }
  const diagonals = [];
  for (let i = 0; i < 3; i++) {
    const flatHorizontal = horizontal.flat();
    let first = [];
    let second = [];
    let third = [];
    let fourth = [];
    for (let j = 0; j < 6 - i; j++) {
      first.push(flatHorizontal[j * 8 + i + 1]);
      second.push(flatHorizontal[j * 8 + i * 7]);
      third.push(flatHorizontal[j * 6 + 5 - i]);
      fourth.push(flatHorizontal[j * 6 + 6 + i * 7]);
    }
    diagonals.push(first);
    diagonals.push(second);
    diagonals.push(third);
    diagonals.push(fourth);
  }
  return { horizontal: horizontal, vertical: vertical, diagonals: diagonals };
};
