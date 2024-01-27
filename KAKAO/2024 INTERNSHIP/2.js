function solution(edges) {
  let [inserted, donut, bar, eight] = [0, 0, 0, 0];
  const graph = {};
  const stack = [];
  for (const [p, q] of edges) {
    if (!graph[p]) graph[p] = [];
    graph[p].push(q);
  }

  const visited = new Set();
  function dfs(cur) {
    // 도넛 그래프
    if (visited.has(cur) && stack[0] === cur) {
      donut++;
      return;
    }
    // 막대 그래프
    if (!graph[cur]) {
      bar++;
      return;
    }
    // 팔자 그래프
    if (graph[cur] && graph[cur].length > 1) {
      eight++;
      return;
    }
    // 생성된 정점
    if (visited.has(cur) && graph[cur].length <= 1) {
      inserted = stack[0];
    }
    if (graph[cur].length > 1 && ) {
      inserted = cur;
    }
    if (visited.has(cur)) return;
    visited.add(cur);
    for (const next of graph[cur]) {
      dfs(next);
    }
  }

  for (const p in graph) {
    dfs(Number(p));
  }

  bar += graph[inserted].length - donut - bar - eight;

  // return [inserted, donut, bar, eight];
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]])); // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])); // [4, 0, 1, 2]
console.log(solution([[1, 2], [2, 1], [3, 2]])); // [3,1,0,0]
// console.log(solution());