const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const n = +fs.readFileSync(path).toString().trim();

