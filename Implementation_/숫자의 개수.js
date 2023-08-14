const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './test.txt';
const [a, b, c] = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const result = String(a * b * c);
const arr = Array.from({ length: 10 }, () => 0);
for (let i = 0; i < result.length; i++) {
  arr[+result[i]] += 1;
}

console.log(arr.join('\n'));