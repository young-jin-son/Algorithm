const { count } = require('console');
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const str = fs.readFileSync(path).toString().trim();
const counter = {};
for (let i = 0; i < 26; i++) {
  counter[String.fromCharCode(97 + i)] = -1;
}
for (let i = 0; i < str.length; i++) {
  if (counter[str[i]] === -1) counter[str[i]] = i;
}
console.log(Object.values(counter).join(' '));