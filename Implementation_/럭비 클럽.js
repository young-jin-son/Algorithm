const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
input.pop();

const sol = (input) => {
  const members = input.map(el => el.split(' '));
  const result = [];

  for (const [name, age, weight] of members) {
    const division = (Number(age) > 17 || Number(weight) >= 80) ? 'Senior' : 'Junior';
    result.push([name, division]);
  }

  return result.map(el => el.join(' ')).join('\n');
}

console.log(sol(input));