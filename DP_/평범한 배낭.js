const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const sol = (input) => {
  let [n, m] = input[0].split(' ').map(Number);
  const arr = input.slice(1).map(el => el.split(' ').map(Number)).sort((a, b) => (a[0] === b[0]) ? b[1] - a[1] : a[0] - b[0]);
  const dp = arr.map(v => v[1]);
  for (let i = 1; i < n; i++) {
    const [w, v] = arr[i];

  }
}

console.log(sol(input));

/*
0000
0010
0000
*/

/*

*/
