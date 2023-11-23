function solution(n, computers) {
  const graph = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => 0);
  let answer = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (computers[i][j]) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  function dfs(start) {
    if (visited[start]) return;
    visited[start] = true;
    for (const v of graph[start]) {
      if (!visited[v]) dfs(v);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}


console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1
console.log(solution(4, [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]])) // 2
/**
 * 1 0 0 1 1
 * 0 1
 */

// 0 1
// 2 3
/**
 * 1 1 0 0
 * 1 1 0 0
 * 0 0 1 1
 * 0 0 1 1
 */