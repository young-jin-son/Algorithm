const input = ['2', '10 8 17', '0 0', '1 0', '1 1', '4 2', '4 3', '4 5', '2 4', '3 4', '7 4', '8 4', '9 4', '7 5', '8 5', '9 5', '7 6', '8 6', '9 6', '10 10 1', '5 5'];

const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let index = 1;
let [m, n, k] = [0, 0, 0];
let answer = '';



for (let i = 0; i < t; i++) {
  console.log(input);
  [m, n, k] = input[index].split(' ').map(Number);
  console.log(m, n, k);
  let indexInfo = input.slice(index + 1, index + 1 + k).map(el => el.split(' ').map(Number));
  console.log(indexInfo);

  const graph = new Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    graph[j] = new Array(m).fill(0);
  }
  // console.log(graph);
  for (let j = 0; j < k; j++) {
    const [x, y] = indexInfo[j];
    if (x >= 0 && x < n && y >= 0 && y < m) {
      graph[x][y] = 1;
    }
  }

  // console.log(graph);

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
  index += k + 1;
  answer += result + '\n';
}

console.log(answer);