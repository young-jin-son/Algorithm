const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(number);
