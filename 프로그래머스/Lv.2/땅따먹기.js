function solution(land) {
  const ROWS = land.length;
  const COLS = land[0].length;

  for (let i = 1; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let prev = [...land[i - 1].slice(0, j), ...land[i - 1].slice(j + 1)];
      land[i][j] += Math.max(...prev);
    }
  }

  return Math.max(...land[ROWS - 1]);
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]])); // 16