const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const plain = fs.readFileSync(path).toString().split('');
const key = 13;
let encrypted = '';
for (const v of plain) {
  if (/[A-Z]/.test(v)) { // 대문자
    const tmp = v.charCodeAt() - 65;
    const ascii = (tmp + key) % 26 + 65;
    encrypted += String.fromCharCode(ascii);
  } else if (/[a-z]/.test(v)) { // 소문자
    const tmp = v.charCodeAt() - 97;
    const ascii = (tmp + key) % 26 + 97;
    encrypted += String.fromCharCode(ascii);
  } else {
    encrypted += v;
  }
}
console.log(encrypted);