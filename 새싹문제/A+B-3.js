
// const input = ['5', '1 1', '2 3', '3 4', '9 8', '5 2'];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
n = Number(n);
arr = arr.map(el => el.split(' ').map(Number));

arr.forEach(el => {
  console.log(el[0] + el[1]);
});


