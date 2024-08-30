function solution(land) {
  const [rows, cols] = [land.length, land[0].length];
  const amount = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

  function bfs(x, y) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || !land[x][y]) return 0;
    let sum = Math.max(land[x][y], amount[x, y]);
    // sum += bfs(x - 1, y);
    sum += bfs(x + 1, y);
    // sum += bfs(x, y - 1);
    sum += bfs(x, y + 1);
    return sum;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (land[i][j]) bfs(i, j);
    }
  }



  let answer = 0;

  return answer;
}

console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]])); // 9
console.log(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]])); // 16