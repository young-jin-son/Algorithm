const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const answer = [];
const heap = [];

for (let i = 0; i < n; i++) {
  if (arr[i] === 0) {
    if (!heap.length) {
      answer.push(0);
    } else {
      answer.push()
    }
  } else {
    heap.push(arr[i]);
  }
}