function solution(m, n, puddles) {
  const graph = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  const divider = 1_000_000_007;
  for (const [x, y] of puddles) {
    graph[x][y] = -1;
  }
  graph[1][1] = 1;

  for (let x = 1; x <= m; x++) {
    for (let y = 1; y <= n; y++) {
      if (graph[x][y] === -1) continue;
      let tmp = 0;
      if (graph[x - 1][y] !== -1) {
        tmp += graph[x - 1][y];
      }
      if (graph[x][y - 1] !== -1) {
        tmp += graph[x][y - 1];
      }
      graph[x][y] += tmp % divider;
    }
  }

  return graph[m][n];
}

console.log(solution(4, 3, [[2, 2]])) // 4
console.log(solution(6, 4, [[1, 2], [3, 4], [4, 5]])); // 31

