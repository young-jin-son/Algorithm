const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const sol = (input) => {
  const [l, c] = input[0].split(' ').map(Number);
  const types = input[1].split(' ').sort();
  const answer = [];
  const tmp = [];

  const isPassword = (pwd) => {
    const regexVowels = /[aeiou]/;
    let vowelCnt = pwd.filter(str => regexVowels.test(str)).length;
    let consonantCnt = pwd.filter(str => !regexVowels.test(str)).length;
    return (vowelCnt >= 1 && consonantCnt >= 2);
  }

  const check = (idx, cnt) => {
    if (cnt === l) {
      if (isPassword(tmp)) {
        answer.push(tmp.join(''));
      }
      return;
    }
    for (let i = idx; i < c; i++) {
      tmp.push(types[i]);
      check(i + 1, cnt + 1);
      tmp.pop();
    }
  }

  check(0, 0);

  return answer.join('\n');
}

console.log(sol(input));