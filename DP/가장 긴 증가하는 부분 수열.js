const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const obj = {};
for (let i = 0; i < n; i++) {
// for (const (v, i) of arr) {
  if (!obj[arr[i]] && arr[i] > obj[obj.length]) {
    obj[arr[i]] = 1;
  }
}
console.log(Object.values(obj).length);