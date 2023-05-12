const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => Number(v));

console.log(Math.abs(arr[0] - arr[1]));