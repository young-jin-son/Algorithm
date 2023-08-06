const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [t, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];

for (let i = 0; i < t; i++) {
  const [command, n, arrStr] = input.slice(i * 3, (i + 1) * 3);
  const arr = JSON.parse(arrStr);
  let flag = true;
  let [left, right] = [0, arr.length];
  for (let j = 0; j < command.length; j++) {
    if (command[j] === 'R') {
      flag = !flag;
    } else {
      (flag) ? left++ : right--;
    }
  }
  const result = (flag) ? arr.slice(left, right) : arr.slice(left, right).reverse();
  answer.push(left <= right ? '[' + result + ']' : 'error');
}
console.log(answer.join('\n'));
