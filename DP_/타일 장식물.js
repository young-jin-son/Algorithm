const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = BigInt(fs.readFileSync(path).toString().trim());

const arr = [BigInt(0), BigInt(4), BigInt(6)];

for (let i = 3n; i <= n; i++) {
  arr.push(arr[i - 1n] + arr[i - 2n]);
}

console.log(arr[n].toString());