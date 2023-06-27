const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let input = require('fs').readFileSync(path).toString().split('\n');
let smallExp = /[a-z]/g;
let bigExp = /[A-Z]/g;
let numExp = /[0-9]/g;
let gapExp = /\s/g;
let answer = [];
for (let i = 0; i < input.length; i++) {
  let item = input[i];
  let counter = [];

  if (item === '') continue;

  counter.push([...item.matchAll(smallExp)].length);
  counter.push([...item.matchAll(bigExp)].length);
  counter.push([...item.matchAll(numExp)].length);
  counter.push([...item.matchAll(gapExp)].length);

  answer.push(counter.join(' '));
}

console.log(answer.join('\n'));