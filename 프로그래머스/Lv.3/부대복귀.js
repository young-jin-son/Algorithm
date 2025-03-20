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

function multiSourceBFS(graph, sources, destination) {
  const distances = Array(Object.keys(graph).length + 1).fill(-1);
  const queue = [{ location: destination, cost: 0 }];
  distances[destination] = 0;

  while (queue.length) {
    const { location, cost } = queue.shift();

    for (const next of graph[location] || []) {
      if (distances[next] === -1) {
        distances[next] = cost + 1;
        queue.push({ location: next, cost: cost + 1 });
      }
    }
  }

  return sources.map(src => distances[src]);
}

function solution(n, roads, sources, destination) {
  const graph = getGraph(roads);
  return multiSourceBFS(graph, sources, destination);
}
