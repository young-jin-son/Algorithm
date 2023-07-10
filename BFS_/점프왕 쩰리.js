const input = ['3', '1 1 10', '1 5 1', '2 2 -1'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const graph = input.slice(1).map(el => el.split(' ').map(Number));

console.log(n, graph);

const cur = [0, 0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    
  }
}