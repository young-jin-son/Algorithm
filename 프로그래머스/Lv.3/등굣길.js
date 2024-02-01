function solution(m, n, puddles) {
  const graph = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
  const divider = 1_000_000_007;
  for (const [x, y] of puddles) {
    graph[x][y] = -1;
  }
  graph[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (graph[i][j] === -1) continue;
      if (graph[i - 1][j] === -1 && graph[i][j - 1] === -1) {
        continue;
      } else if (graph[i - 1][j] === -1) {
        graph[i][j] = graph[i][j - 1];
      } else if (graph[i][j - 1] === -1) {
        graph[i][j] = graph[i - 1][j];
      } else {
        graph[i][j] = (graph[i - 1][j] + graph[i][j - 1]) % divider;
      }
    }
  }

  return graph[n][m];
}

console.log(solution(4, 3, [[2, 2]])) // 4
console.log(solution(6, 4, [[1, 2], [3, 4], [4, 5]])); // 2

