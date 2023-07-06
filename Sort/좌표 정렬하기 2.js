const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const points = input.slice(1).map(el => el.split(' ').map(Number));
const sorted = points.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
console.log(sorted.map(el => el.join(' ')).join('\n'));