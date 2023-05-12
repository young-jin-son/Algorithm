
const input = ['4', '2 1 3 1'];

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arrA = input[1].split(' ').map(v => Number(v));
const p = new Array(arrA.length).fill(-1);

arrA.forEach((v, i) => {
  const minIndex = arrA.indexOf(Math.min(...arrA));
  p[minIndex] = i;
  arrA[minIndex] = 1001;
})

console.log(p.join(' '));