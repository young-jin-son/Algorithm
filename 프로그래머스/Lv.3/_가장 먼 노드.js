function solution(n, edge) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [x, y] of edge) {
    graph[x].push(y);
    graph[y].push(x);
  }

  const dp = Array(n + 1).fill(Infinity);
  [dp[0], dp[1]] = [0, 0];

  const visited = Array(n + 1).fill(false);
  const queue = [1];
  visited[1] = true;

  while (queue.length) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        dp[next] = dp[cur] + 1;
        queue.push(next);
      }
    }
  }

  const max = Math.max(...dp);
  return dp.filter(x => x === max).length;
}

/**
 * 1번 노드에서 가장 멀리 떨어진 노드의 개수를 반환
 * 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들
 */
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])); // 3
console.log(solution(4, [[2, 1], [2, 3], [1, 3], [3, 4]])); // 
// console.log(solution()); // 
// console.log(solution()); // 