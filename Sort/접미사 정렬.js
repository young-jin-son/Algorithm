const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim();
const suffix = []; '';
for (let i = 0; i < input.length; i++) {
  suffix.push(input.slice(i));
}
console.log(suffix.sort().join('\n'));