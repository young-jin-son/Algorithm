function solution(n, paths, gates, summits) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [i, j, w] of paths) {
    graph[i].push([j, w]);
    graph[j].push([i, w]);
  }
  const answer = [];

  const dfs = (cur, max, visited) => {
    visited[cur] = 1;
    if (!graph[cur].length) return;
    for (const [next, weight] of graph[cur]) {
      if (gates.includes(next) || visited.includes(next)) continue;
      if (summits.includes(next)) {
        answer.push([next, Math.max(max, weight)]);
        continue;
      }
      dfs(next, Math.max(max, weight), visited);
    }
  }
  for (const gate of gates) {
    const visited = Array.from({ length: n + 1 }, () => 0);
    dfs(gate, 0, visited);
  }

  answer.sort((a, b) => (a[1] === b[1]) ? a[0] - b[0] : a[1] - b[1]);
  return answer[0];
}
// function solution(n, paths, gates, summits) {
//   const graph = Array.from({ length: n + 1 }, () => Array.from({length: n + 1}, () => 0));
//   for (const [i, j, w] of paths) {
//     graph[i][j] = w;
//     graph[j][i] = w;
//   }
//   const answer = [];
//   const dfs = (cur, maxW, visited) => {
//     if (!graph[cur].length) return;

//   }
//   for (const gate of gates) {
//     const visited = Array.from({length: n + 1}, () => false);
//     visited[gate] = true;
//     dfs(gate, 0, visited);
//   }
//   console.log(answer);
//   answer.sort((a, b) => (a[1] === b[1]) ? a[0] - b[0] : a[1] - b[1]);
//   return answer[0];
// }

// const result = solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]], [1, 3], [5]); // => 5,3 
// const result = solution(7, [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]], [1], [2, 3, 4]); // => 3, 4
// const result = solution(5, [[1, 3, 10], [1, 4, 20], [2, 3, 4], [2, 4, 6], [3, 5, 20], [4, 5, 6]], [1, 2], [5]); // => 5, 6
const result = solution(7, [[1, 2, 5], [1, 4, 1], [2, 3, 1], [2, 6, 7], [4, 5, 1], [5, 6, 1], [6, 7, 1]], [3, 7], [1, 5]); // => 5, 1
console.log(result);
