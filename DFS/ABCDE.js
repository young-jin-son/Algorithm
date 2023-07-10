const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(el => el.split(' ').map(Number));

const sol = (input) => {
  const [n, m] = input[0];
  const isVisited = Array.from({ length: n }, () => 0);
  let isValid = 0;
  const graph = Array.from({ length: n }, () => Array(0));
  for (let i = 1; i <= m; i++) {
    const [a, b] = input[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  const dfs = (idx, cnt) => {
    if (isValid) {
      return;
    }
    isVisited[idx] = 1;
    if (cnt === 4) {
      isValid = 1;
      return;
    }
    for (let i = 0; i < graph[idx].length; i++) {
      const next = graph[idx][i];
      if (!isVisited[next]) {
        dfs(next, cnt + 1);
      }
    }
    isVisited[idx] = 0;
  }

  for (let j = 0; j < n; j++) {
    dfs(j, 0);
  }

  return isValid;
};

console.log(sol(input));