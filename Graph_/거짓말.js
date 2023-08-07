const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const [truthNum, ...truthPeople] = input[1].split(' ').map(Number);
const parties = input.slice(2).map(el => el.split(' ').map(Number));
console.log(n, m);
console.log(truthNum, truthPeople);
for (let i = 0; i < m; i++) {

}
console.log(parties);