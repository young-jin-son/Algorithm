const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const visited = Array.from({ length: n }, () => 0);
const answer = [];
const tmp = [];

const sol = (cnt) => {
  if (cnt === m) {
    answer.push(tmp.join(' '));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      tmp.push(i + 1);
      sol(cnt + 1);
      tmp.pop();
      visited[i] = 0;
    }
  }
}

sol(0);
console.log(answer.join('\n'));
