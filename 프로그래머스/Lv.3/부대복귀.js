function getGraph(edges) {
  const graph = {};
  for (const [x, y] of edges) {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];
    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
}

function solution(n, roads, sources, destination) {
  const graph = getGraph(roads);
  const distances = Array(n + 1).fill(-1);
  const queue = [{ location: destination, cost: 0 }];
  let i = 0;

  distances[destination] = 0;

  while (i < queue.length) {
    const { location, cost } = queue[i++];

    for (const next of graph[location] || []) {
      if (distances[next] === -1) {
        distances[next] = cost + 1;
        queue.push({ location: next, cost: cost + 1 });
      }
    }
  }

  return sources.map(src => distances[src]);
}
