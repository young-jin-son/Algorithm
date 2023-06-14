const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim();

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const sol = (arr, count) => {

}