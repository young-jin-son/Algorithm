function solution(N, road, K) {
  const graph = {};
  const dp = Array(N + 1).fill(Infinity);
  dp[1] = 0;

  for (const [x, y, c] of road) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push([y, c]);
    graph[y].push([x, c]);
  }

  const queue = [[1, 0]];
  while (queue.length > 0) {
    const [current, currentCost] = queue.shift();

    for (const [neighbor, cost] of graph[current]) {
      const newCost = currentCost + cost;
      if (newCost < dp[neighbor]) {
        dp[neighbor] = newCost;
        queue.push([neighbor, newCost]);
      }
    }
  }

  return dp.filter(distance => distance <= K).length;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3)); // 4
console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4)); // 4