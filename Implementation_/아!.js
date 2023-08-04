const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [str1, str2] = fs.readFileSync(path).toString().trim().split('\n');
console.log(str1.includes(str2) ? 'go' : 'no');