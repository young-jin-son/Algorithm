function solution(edges) {
  // 자기 자신 외에 자신으로 들어오는 엣지가 없는 노드.
  // 그래프 만듦
  const count = Array(1_000_001).fill(0)
  const in_edge = {};
  const graph = {};
  let min = Number.MAX_SAFE_INTEGER;
  let inserted_node = 0;

  // 추가된 노드를 찾음
  for (const [x, y] of edges) {
    count[x]--;
    count[y]++;
    if (min > count[x]) {
      min = count[x];
      inserted_node = x;
    }
  }

  console.log(count.slice(0, 10))
  console.log(in_edge);
  console.log(inserted_node);
  // console.log("GRAPH", graph);
  const answer = [];
  const insertedNode = Math.max(Object.values(graph));
  console.log(insertedNode)
  return [inserted_node];
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]])) // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])) // [4, 0, 1, 2]