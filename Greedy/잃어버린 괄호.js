const fs = require('fs');
let input = '50-40+30-20+70';
input = input.split('');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
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

let [plus, minus] = [0, 0];
let answer = 0;
let isMinus = false;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] >= 0) {
    (isMinus) ? answer -= numArr[i] : answer += numArr[i];
    // if (isMinus) {
    //   minus -= numArr[i];
    // } else {
    //   plus += numArr[i];
    // }
  } else {
    if (!isMinus) {
      isMinus = true;
    }
    answer += numArr[i];
  }
}

// console.log(numArr);
console.log(answer);



// -가 나오면 - 뒤부터 -가 나오기 전까지 괄호를 친다.