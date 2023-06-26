const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const answer = [];
const queue = new Array(n).fill(1).map((v, i) => v + i);

let count = 1;

while (queue.length) {
  // const shitedItem = queue.shift();
  (count % k) ? queue.push(queue.shift()) : answer.push(queue.shift());
  // if (count % k === 0) {
  //   answer.push(shitedItem);
  // } else {
  //   queue.push(shitedItem);
  // }
  count++;
}

console.log('<' + answer.join(', ') + '>');
