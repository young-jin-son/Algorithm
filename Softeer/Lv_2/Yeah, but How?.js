// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = '';
// rl.on('line', (line) => {
//   input = line.trim();
// });

// rl.on('close', () => {
//   let answer = input.replaceAll("()", "(1)");
//   answer = answer.replaceAll(")(", ")+(");
//   console.log(answer);
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = '';
rl.on('line', (line) => {
  input = line.trim();
});

rl.on('close', () => {
  let answer = input;
  let idx = answer.indexOf('()');
  while (idx >= 0) {
    answer = answer.slice(0, idx) + '(1)' + answer.slice(idx + 2,);
    idx = answer.indexOf('()');
  }

  idx = answer.indexOf(')(');
  while (idx >= 0) {
    answer = answer.slice(0, idx) + ')+(' + answer.slice(idx + 2,);
    idx = answer.indexOf(')(');
  }
  console.log(answer);
});