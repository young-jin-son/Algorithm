const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [...arr] = fs.readFileSync(path).toString().trim().split('\n').slice(0, -1).map(el => el.split(' ').map(Number));
const tests = [];

const recursion = (k, idx, t, tmp, answer) => {
  if (tmp.length === 6) {
    answer.push(tmp.join(' '));
    return;
  }
  for (let i = idx; i <= k; i++) {
    tmp.push(arr[t][i]);
    recursion(k, i + 1, t, tmp, answer);
    tmp.pop();
  }
}

for (let i = 0; i < arr.length; i++) {
  const answer = [];
  recursion(arr[i][0], 1, i, [], answer);
  tests.push(answer.join('\n'));
}

console.log(tests.join('\n\n'));
