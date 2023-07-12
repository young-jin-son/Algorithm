const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().toUpperCase();

const sol = (str) => {
  const counter = {};
  const answer = [];
  [...str].forEach(c => (counter[c]) ? counter[c]++ : counter[c] = 1);
  const max = Math.max(...(Object.values(counter)));
  for (const key in counter) {
    if (counter[key] === max) {
      answer.push(key);
    }
  }
  return (answer.length >= 2) ? '?' : answer.pop();
}

console.log(sol(input));