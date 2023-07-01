const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const exp = fs.readFileSync(path).toString().trim();
const answer = [];
const stack = [];

for (const v of exp) {
  if (v === '(') {
    stack.push(v);
  } else if (v === ')') {
    while (1) {
      const popped = stack.pop();
      if (popped === '(') break;
      answer.push(popped);
    }
  } else if (/[*/]/.test(v)) {
    if (stack.at(-1) === '*' || stack.at(-1) === '/') {
      answer.push(stack.pop());
    }
    stack.push(v);
  } else if (/[+\-]/.test(v)) {
    while (/[+\-*/]/.test(stack.at(-1))) {
      answer.push(stack.pop());
    }
    stack.push(v);
  } else {
    answer.push(v);
  }
}

while (stack.length) {
  answer.push(stack.pop());
}

console.log(answer.join(''));