const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...x] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

// 첫 번째 가로등이 0까지 비출 수 있는 높이와 마지막 가로등이 n까지 비출 수 있는 높이 중 더 큰 값을 고름
let answer = Math.max(x[0] - 0, n - x[x.length - 1]);
for (let i = 1; i < x.length; i++) {
  answer = Math.max(answer, Math.ceil((x[i] - x[i - 1]) / 2));
}

console.log(answer);

