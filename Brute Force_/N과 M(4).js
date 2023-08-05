const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const answer = [];
const tmp = [];
const isVisited = Array.from({ length: n }, () => false);

const dfs = (idx, cnt) => {
  if (cnt === m) {
    answer.push(tmp.join(' '));
    return;
  }

  for (let i = idx; i <= n; i++) {
    tmp.push(i);
    dfs(i, cnt + 1);
    tmp.pop();
  }
}

dfs(1, 0);
console.log(answer.join('\n'));
