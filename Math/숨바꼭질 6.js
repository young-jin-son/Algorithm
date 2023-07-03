const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, s, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const diff = arr.map(v => Math.abs(v - s));

const getGCD = (a, b) => {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

while (diff.length > 1){
  diff.push(getGCD(diff.pop(), diff.pop()));
}

console.log(diff.pop());