const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let n = +fs.readFileSync(path).toString().trim();

const answer = [];
while (n % 2 === 0) {
  answer.push(2);
  n /= 2;
}

// 3 이상의 홀수를 소인수로 반복적으로 나누기
for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
  while (n % i === 0) {
    answer.push(i);
    n /= i;
  }
}

// 마지막으로 남은 수가 소인수인 경우
if (n > 2) {
  answer.push(n);
}
console.log(answer.join('\n'));