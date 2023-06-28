const fs = require('fs');
const { get } = require('http');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split("\n");
const answer = [];

const getGCD = (a, b) => {
  let r = 0;
  while (b) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

for (let i = 0; i < t; i++) {
  const [n, ...arr] = input[i].split(' ').map(Number);
  const gcdArr = [];
  for (let j = 0; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const gcd = getGCD(arr[j], arr[k]);
      gcdArr.push(gcd);
    }
  }
  answer.push(gcdArr.reduce((a, b) => a + b, 0))
}

console.log(answer.join('\n'));
