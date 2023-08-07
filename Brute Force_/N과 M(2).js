const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const answer = [];
const tmp = [];

const sol = (idx, cnt) => {
  if (cnt === m) {
    answer.push(tmp.join(' '));
    return;
  }

  for (let i = idx; i <= n; i++) {
    tmp.push(i);
    sol(i + 1, cnt + 1);
    tmp.pop();
  }
}

sol(1, 0);
console.log(answer.join('\n'));
