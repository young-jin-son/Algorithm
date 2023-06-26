const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);
const stack = [];
for (let i = 0; i < n; i++) {
  while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
    arr[stack.pop()] = arr[i];
  }
  stack.push(i);
}
while (stack.length) {
  arr[stack.pop()] = -1;
}

console.log(arr.join(' '));