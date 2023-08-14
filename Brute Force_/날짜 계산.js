const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './test.txt';
const [e, s, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let i = 1;
while (i % 15 !== e % 15 || i % 28 !== s % 28 || i % 19 !== m % 19) {
  i++;
}

console.log(i);