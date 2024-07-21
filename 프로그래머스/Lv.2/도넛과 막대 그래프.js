function solution(edges) {
  // 자기 자신 외에 자신으로 들어오는 엣지가 없는 노드.
  // 그래프 만듦
  const graph = {};
  for (const [x, y] of edges) {
    if (graph[x]) {
      graph[x].push(y);
    } else {
      graph[x] = [y];
    }
  }

  console.log("GRAPH", graph);
  const answer = [];
  const insertedNode = Math.max(Object.values(graph));
  console.log(insertedNode)
  return answer;
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]])) // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])) // [4, 0, 1, 2]