const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(v => Number(v)));
for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i][0] + arr[i][1]);
}
