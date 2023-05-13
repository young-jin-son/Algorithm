
// -가 나오면 - 뒤부터 -가 나오기 전까지 괄호를 친다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const numArr = [];
let num = '';

input.forEach(x => {
  if (x === '-') {
    numArr.push(Number(num));
    num = x;
  } else if (x === '+') {
    numArr.push(Number(num));
    num = x;
  } else {
    num += x;
  }
});
numArr.push(Number(num));

let answer = 0;
let isMinus = false;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 0) {
    (isMinus) ? answer -= numArr[i] : answer += numArr[i];
  } else {
    if (!isMinus) {
      isMinus = true;
    }
    answer += numArr[i];
  }
}
console.log(answer);


