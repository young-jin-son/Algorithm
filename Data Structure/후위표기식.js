const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const medianExp = fs.readFileSync(path).toString().trim();
const stack = [];
const answer = [];
for (const s of medianExp) {

}