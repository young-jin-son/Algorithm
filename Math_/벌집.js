const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
let tmp = 1;
let idx = 1;
const arr = [];
while (tmp < n) {
  arr.push(tmp);
  tmp += 6 * idx;
  idx++;
}

console.log(arr.length + 1);
