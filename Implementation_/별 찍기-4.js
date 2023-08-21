const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();
for (let i = n; i > 0; i--) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}