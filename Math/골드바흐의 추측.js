const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);
input.pop();
const answer = [];

const isPrime = (n) => {
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
for (const v of input) {
  let [x, y] = [3, v - 3];
  let isConfirm = false;
  while (x <= v / 2) {
    if (isPrime(x) && isPrime(y)) {
      isConfirm = true;
      break;
    }
    x += 2;
    y -= 2;
  }
  answer.push((isConfirm) ? `${v} = ${x} + ${y}` : "Goldbach's conjecture is wrong.");
}
console.log(answer.join('\n'));