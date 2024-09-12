function solution(n, costs) {
  let answer = 0;
  const graph = Array.from({ length: n }, () => []);

  for (const [x, y, z] of costs) {
    graph[x].push([y, z]);
    graph[y].push([x, z]);
  }

  const pq = [];
  const visited = Array(n).fill(false);

  pq.push([0, 0]);

  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);
    const [node, cost] = pq.shift();

    if (visited[node]) continue;

    visited[node] = true;
    answer += cost;

    for (const [nextNode, nextCost] of graph[node]) {
      if (!visited[nextNode]) {
        pq.push([nextNode, nextCost]);
      }
    }
  }

  return answer;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]])); // 4
// console.log(solution()); // 
// console.log(solution()); // 
// console.log(solution()); // 