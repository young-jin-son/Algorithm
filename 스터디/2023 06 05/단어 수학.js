const fs = require('fs');
const path = (process.platform === 'linux') ? '/dev/stdin' : './test.txt';
const [n, ...words] = fs.readFileSync(path).toString().trim().split('\n');

const count = {};
words.forEach(word => {
  [...word].forEach((alphabet, i) => {
    if (!count[alphabet]) {
      count[alphabet] = 0;
    }
    count[alphabet] += 10 ** (word.length - i - 1);
  })
})

const answer = Object.values(count).sort((a, b) => b - a).reduce((acc, v, i) => acc + v * (9 - i), 0);

console.log(answer);
