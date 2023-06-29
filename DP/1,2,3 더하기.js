const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const sol = (num) => {
  if (num <= 2) return num;
  const tmp = [1, 1, 2];
  for (let i = 3; i <= num; i++) {
    tmp.push(tmp[i - 1] + tmp[i - 2] + tmp[i - 3]);
  }
  return tmp.pop();
}
const answer = [];
for (let i = 0; i < n; i++) {
  answer.push(sol(input[i]));
}
console.log(answer.join('\n'));