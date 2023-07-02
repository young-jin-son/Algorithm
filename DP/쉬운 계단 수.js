const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const arr = [9];
let tmp = 1;
for (let i = 1; i < n; i++) {
  arr.push((arr[i - 1] * 2 - tmp) % 1000000000);
  tmp += i - 1;
  console.log(tmp);
}
console.log(arr.pop());