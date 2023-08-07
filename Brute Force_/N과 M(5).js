const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const sortedArr = arr.sort((a, b) => a - b);
const answer = [];
const tmp = [];
const visited = Array.from({ length: n }, () => false);

const sol = (cnt) => {
  if (cnt === m) {
    answer.push(tmp.join(' '));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      tmp.push(sortedArr[i]);
      sol(cnt + 1);
      tmp.pop();
      visited[i] = false;
    }
  }
}

sol(0);

console.log(answer.join('\n'));