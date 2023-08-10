// const fs = require('fs');
// const path = process.platform === 'linux' ? 'dev/stdin' : './test.txt';
// const [e, s, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

// let i = 1;
// while (i % 15 !== e % 15 || i % 28 !== s % 28 || i % 19 !== m % 19) {
//   i++;
// }

// console.log(i);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [e, s, m] = line.split(' ').map(Number);
  let i = 1;
  while (1) {
    if ((i - e) % 15 == 0 && (i - s) % 28 == 0 && (i - m) % 19 == 0) {
      console.log(i)
      process.exit();
    } else {
      i++;
    }
  }
});