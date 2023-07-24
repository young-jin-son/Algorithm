const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const visited = Array.from({ length: n }, () => 0);
const answer = [];
const seq = [];

const dfs = (cnt) => {
  if (cnt === m) {
    answer.push(seq.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      seq.push(i + 1);
      dfs(cnt + 1);
      seq.pop();
      visited[i] = 0;
    }
  }
}

dfs(0);
console.log(answer.join('\n'));
