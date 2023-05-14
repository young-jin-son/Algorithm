const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map(v => Number(v));
const arr = input[1].split(' ').map(v => Number(v));
const filtered = arr.filter(v => v < x);
console.log(filtered.join(' '));