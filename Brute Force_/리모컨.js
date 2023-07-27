// const fs = require('fs');
// const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
// const [n, m, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

// const brokenBtn = arr
//   ? arr
//     .reduce((obj, key) => {
//       obj[key] = true;
//       return obj;
//     }, {})
//   : {};

// // console.log(brokenBtn);
// let cnt = Math.abs(100 - n);
// for (let i = 0; i < 1_000_000; i++) {
//   const numStr = i.toString();
//   let isValid = true;
//   for (let j = 0; j < numStr.length; j++) {
//     if (brokenBtn[numStr[j]]) {
//       isValid = false;
//       break;
//     }
//   }
//   if (isValid) {
//     cnt = Math.min(cnt, Math.abs(i - n) + numStr.length);
//   }
// }

// console.log(cnt);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, m, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

let answer = Math.abs(100 - n);

for (let i = 0; i < 1_000_000; i++) {
  let isValid = true;
  for (const char of String(i)) {
    if (arr.includes(+char)) {
      isValid = false;
      break;
    }
  }
  if (isValid) {
    answer = Math.min(answer, Math.abs(i - n) + String(i).length);
  }
}

console.log(answer);