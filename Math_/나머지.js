const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const mod = 42;
const obj = {};
for (const v of input) {
  if (!obj[v % mod]) {
    obj[v % mod] = 1;
  }
}
console.log(Object.values(obj).length);