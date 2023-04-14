export function checkFour(arr) {
  let count = 0;
  for (let line of arr) {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === 0) {
        count = 0;
      } else if (line[i] === line[i + 1]) {
        count += 1;
      } else count = 0;
      if (count === 3) return line[i];
    }
  }  
}
