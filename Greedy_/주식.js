const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];
for (let i = 0; i < t; i++) {
  const n = +input[i * 3];
  const arr = input[i * 3 + 1].split(' ').map(Number);
  let max = 0;
  for (let j = 0; j < n; j++) {
    
  }
  answer.push();
}

console.log(answer.join('\n'));