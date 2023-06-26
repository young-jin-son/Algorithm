const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const plain = fs.readFileSync(path).toString().split('');
const key = 13;
let encrypted = '';
for (const s of plain) {
  if (/[A-Z]/.test(s)) { // 대문자
    const ascii = s.charCodeAt() - 65;
    const e = (ascii + key) % 26 + 65;
    encrypted += String.fromCharCode(e);
  } else if (/[a-z]/.test(s)) { // 소문자
    const ascii = s.charCodeAt() - 97;
    const e = (ascii + key) % 26 + 97;
    encrypted += String.fromCharCode(e);
  } else {
    encrypted += s;
  }
}
console.log(encrypted);