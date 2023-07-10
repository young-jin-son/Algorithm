const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];

const gcd = (a, b) => {
  let r = 0;
  while (b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

for (let i = 0; i < t; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  answer.push((a * b) / gcd(a, b));
}

console.log(answer.join('\n'));