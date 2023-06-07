const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const edges = input[1].split(' ').map(BigInt);
const nodes = input[2].split(' ').map(BigInt);
let price = nodes[0];
let answer = 0n;

for (let i = 0; i < n - 1; i++) {
  answer += price * edges[i];
  if (price > nodes[i + 1]) {
    price = nodes[i + 1];
  }
}
console.log(String(answer));