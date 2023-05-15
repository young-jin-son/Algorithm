// const input = ['11', '1 4 1 2 4 2 4 2 3 4 4', '2'];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(v => Number(v));
const x = Number(input[2]);
const filtered = arr.filter(v => v === x);
console.log(filtered.length);
