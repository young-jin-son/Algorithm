// const n = Number('1');

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());
let count = 1;
let answer = 666;

// 왜 if문을 위로 올리면 틀릴까 
// => answer을 먼저 + 해주지 않으면 666부터 다시 검사를 하기 때문에 count가 제대로 안됨
while (count < n) {
  answer++;
  if (String(answer).includes("666")) {
    count++;
  }
}

console.log(answer);
