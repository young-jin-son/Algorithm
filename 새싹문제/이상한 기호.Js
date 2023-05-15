const fs = require('fs');
const [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

console.log((x + y) * (x - y));