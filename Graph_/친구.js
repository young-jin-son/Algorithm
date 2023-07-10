// TODO: 런타임 에러
const fs = require('fs');
const path = process.platform === 'lunux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const sol = (input) => {
  const n = +input[0];
  const graph = input.slice(1).map(el => el.split(''));
  const isVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let result = 0;

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;
        if (graph[i][j] === 'Y' || (graph[i][k] === 'Y' && graph[k][j] === 'Y')) {
          isVisited[i][j] = 1;
        }
      }
    }
  }

  for (const visit of isVisited) {
    result = Math.max(result, visit.reduce((a, b) => a + b, 0));
  }

  return result;
}

console.log(sol(input));