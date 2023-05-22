// const set = new Set(['13', 'but', 'i', 'wont', 'hesitate', 'no', 'more', 'no', 'more', 'it', 'cannot', 'wait', 'im', 'yours'].slice(1));

const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.trim());
const n = +input.shift();
const answer = [...new Set(input)].sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  }
})
console.log(answer.join('\n'));


