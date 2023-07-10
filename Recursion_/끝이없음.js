// FIXME: 답은 나오는데 런타임 에러 뜸
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const str = input[0];
const s = input[1];
let times = +input[2];
const [min, max] = input[3].split(' ').map(Number);

const sol = (inputValue) => {
  if (times <= 0 || inputValue.length > max) return inputValue;
  times--;
  return sol(s.replace(/\$/g, inputValue));
}

const result = sol(str, s);
const answer = [];
for (let i = min - 1; i < max; i++) {
  result[i] ? answer.push(result[i]) : answer.push('-');
}

console.log(answer.join(''));
// console.log(answer.join('') === 'xybbbbaxyaxybbaxyaxybbbbbbbbaxyaxybbaxyaxybbbbaxyaxybbaxyaxybbbbbbaxyaxybbaxyaxybbbbaxyaxybbaxyaxybb');


