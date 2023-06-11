const fs = require("fs");
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const arr = input.reverse();
const stack = [];
const result = [];
let cnt = 1;

while (n--) {
  const tmp = arr.pop();
  while (cnt <= tmp) {
    stack.push(cnt++);
    result.push("+");
  }
  if (stack[stack.length - 1] === tmp) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    return;
  }
}

console.log(result.join("\n"));