const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

const answer = [];
const tmp = [];

const sol = (cnt) => {
  if (cnt === n) {
    answer.push(tmp.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!tmp.includes(i)) {
      tmp.push(i);
      sol(cnt + 1);
      tmp.pop();
    }
  }
}

sol(0);
console.log(answer.join('\n'));