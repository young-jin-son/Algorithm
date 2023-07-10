const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
let answer = 0;
for (let i = 0; i < n; i++) {

}
console.log(answer);