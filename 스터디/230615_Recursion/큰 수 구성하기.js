const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, k, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g);

arr.sort((a, b) => b - a);
const len = n.length;
const answer = 1;
for (let i = 0; i < len; i++) {
  const tmp = 
}

