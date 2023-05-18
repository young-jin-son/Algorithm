// const [n, ...arr] = ['3', '4', '7', '10'].map(Number);

const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let answer = '';

// 미리 각 결과를 계산해서 넣어놓음
const count = [1, 2, 4];
for (let i = 3; i < 10; i++) {
  count.push(count[i - 1] + count[i - 2] + count[i - 3]);
}

// input에 따라 넣어놓은 방법의 수를 가져와서 answer에 넣음
for (v of arr) {
  answer += count[v - 1] + '\n';
}

console.log(answer);
