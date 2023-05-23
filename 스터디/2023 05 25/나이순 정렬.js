// const input = ['3', '21 Junkyu', '21 Dohyun', '20 Sunyoung'];

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const sortedMembers = input.map(el => el.split(' ')).sort((a, b) => +a[0] - +b[0]);
const answer = sortedMembers.map(el => el.join(' ')).join('\n');

console.log(answer);
