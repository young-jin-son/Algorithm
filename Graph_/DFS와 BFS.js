const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, m, v] = input[0].split(' ').map(Number);
const graph = [...Array(n + 1)].map(() => []);
for (let i = 0; i < m; i++) {
  const [from, to] = input[i + 1].split(' ').map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (start) => {
  const stack = [start];
  const visited = Array(n + 1).fill(false);
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      stack.push(...graph[node]);
    }
  }
  return result.join(' ');
}

const bfs = (start) => {
  const queue = [start];
  const visited = Array(n + 1).fill(false);
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      queue.push(...graph[node]);
    }
  }
  return result.join(' ');
}

graph.forEach(v => v.sort((a, b) => b - a));
console.log(dfs(v));

graph.forEach(v => v.sort((a, b) => a - b));
console.log(bfs(v));