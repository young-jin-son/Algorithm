const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const testCases = fs.readFileSync(path).toString().trim().split('\n');

const answer = [];

const sol = () => {

}

for (let i = 0; i < testCases.length; i++) {
  const [k, ...s] = testCases[i].split(' ').map(Number);


}