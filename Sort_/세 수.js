const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const arr = fs.readFileSync(path).toString().trim().split(' ').map(Number).sort((a, b) => a - b);
console.log(arr[1]);
