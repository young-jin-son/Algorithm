function solution(n, paths, gates, summits) {
  let INF = 10_000_001;
  const graph = Array.from({ length: n + 1 }, () => []);
  const summitsSet = new Set(summits);
  for (const [p, q, w] of paths) {
    if (!gates.includes(q)) graph[p].push([q, w]);
    if (!gates.includes(p)) graph[q].push([p, w]);
  }
  console.log(graph);
  const answer = [];
  for (const start of gates) {
    const visitedSet = new Set();
    visitedSet.add(start);
    const arr = new Array(n + 1).fill(INF);
    for (let i = 1; i <= n; i++) {
      if (gates.includes(i) || visitedSet.has(i)) continue;

    }

  }

  return answer;
}

const result = solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]], [1, 3], [5]); // => 5,3 
// const result = solution(7, [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]], [1], [2, 3, 4]); // => 3, 4
// const result = solution(5, [[1, 3, 10], [1, 4, 20], [2, 3, 4], [2, 4, 6], [3, 5, 20], [4, 5, 6]], [1, 2], [5]); // => 5, 6
// const result = solution(7, [[1, 2, 5], [1, 4, 1], [2, 3, 1], [2, 6, 7], [4, 5, 1], [5, 6, 1], [6, 7, 1]], [3, 7], [1, 5]); // => 5, 1
console.log(result);
