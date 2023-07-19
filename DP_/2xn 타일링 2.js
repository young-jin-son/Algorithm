const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
const mod = 10007;
let answer = 1;
for (let i = 2; i <= n; i++) {
  answer = (i % 2 === 0) ? (answer * 2 + 1) % mod : (answer * 2 - 1) % mod;
}
console.log(answer);