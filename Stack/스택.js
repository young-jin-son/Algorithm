const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const commands = input.slice(1).map(el => el.split(' '));
const stack = [];
const answer = [];
for (let i = 0; i < n; i++) {
  const command = commands[i][0];

  if (command === 'push') {
    stack.push(commands[i][1]);
  } else if (command === 'pop') {
    if (!stack.length) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  } else if (command === 'size') {
    answer.push(stack.length);
  } else if (command === 'empty') {
    answer.push(stack.length ? 0 : 1);
  } else if (command === 'top') {
    if (!stack.length) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }
}

console.log(answer.join('\n'));