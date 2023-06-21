const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
let [t, ...nums] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const answer = [];
for (let i = 0; i < t; i++) {
  if (nums[i] === 0) {
    answer.push([1, 0]);
    continue;
  } else if (nums[i] === 1) {
    answer.push([0, 1]);
    continue;
  }
  const count = [[1, 0], [0, 1]];
  for (let j = 2; j <= nums[i]; j++) {
    count.push([count[j - 1][0] + count[j - 2][0], count[j - 1][1] + count[j - 2][1]]);
  }
  answer.push(count.pop());
}

console.log(answer.map(el => el.join(' ')).join('\n'));