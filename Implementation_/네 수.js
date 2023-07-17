const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [a, b, c, d] = fs.readFileSync(path).toString().trim().split(' ');
console.log(Number(a + b) + Number(c + d));