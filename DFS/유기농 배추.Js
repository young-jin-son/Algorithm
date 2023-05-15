const input = ['2', '10 8 17', '0 0', '1 0', '1 1', '4 2', '4 3', '4 5', '2 4', '3 4', '7 4', '8 4', '9 4', '7 5', '8 5', '9 5', '7 6', '8 6', '9 6', '10 10 1', '5 5'];

const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const [m, n, k] = input[1].split(' ').map(v => Number(v));
const indexInfo = input.slice(2,).map(el => el.split(' ').map(Number));

const graph = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
  graph[i] = new Array(m).fill(0);
}
console.log(graph);
for (let i = 0; i < k; i++) {
  const [x, y] = [indexInfo[i][0], indexInfo[i][1]];
  console.log(x, y);
}

console.log(graph);
function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }
  if (graph[x][y] === 1) {
    graph[x][y] = 0;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

let result = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (dfs(i, j)) {
      result++;
    }
  }
}

console.log(result);