// Geometric function to get vertices left of a square

export const checkOpposite = (x, y, length) => {
  const [x1, y1] = x;
  const [x2, y2] = y;
  const third = [(x1 + x2 + (y1 - y2)) / 2, (y1 + y2 - (x1 - x2)) / 2];
  const fourth = [(x1 + x2 - (y1 - y2)) / 2, (y1 + y2 + (x1 - x2)) / 2];
  if ([...third, ...fourth].some((n) => n < 0 || n >= length)) return null;
  return [third[0], third[1], fourth[0], fourth[1]];
};
