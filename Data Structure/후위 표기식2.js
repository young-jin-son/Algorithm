const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, exp, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const stack = [];
const values = {};

for (let i = 0; i < n; i++) { // 피연산자에 대응하는 값 저장
  values[String.fromCharCode([65 + i])] = +input[i];
}

for (let i = 0; i < exp.length; i++) {
  if (exp[i] === '+') {
    const y = stack.pop();
    const x = stack.pop();
    stack.push(x + y);
  } else if (exp[i] === '-') {
    const y = stack.pop();
    const x = stack.pop();
    stack.push(x - y);
  } else if (exp[i] === '*') {
    const y = stack.pop();
    const x = stack.pop();
    stack.push(x * y);
  } else if (exp[i] === '/') {
    const y = stack.pop();
    const x = stack.pop();
    stack.push(x / y);
  } else {
    stack.push(values[exp[i]]);
  }
}

console.log(stack.pop().toFixed(2));