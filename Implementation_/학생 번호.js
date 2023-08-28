const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

let result = input[0].length;

for (let i = 1; i <= input[0].length; i++) {
  let flag = true;

  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (input[j].slice(-i) === input[k].slice(-i)) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  if (flag) {
    result = i;
    break;
  }
}

console.log(result);
