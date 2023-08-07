const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const sol = () => {
  let max = 0;
  const tmp = [];
  const visited = Array.from({ length: n }, () => false);

  const recursion = () => {
    if (tmp.length === n) {
      let sum = 0;
      for (let i = 0; i < n - 1; i++) {
        sum += Math.abs(tmp[i] - tmp[i + 1]);
      }
      max = Math.max(max, sum);
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          tmp.push(arr[i]);
          visited[i] = true;
          recursion();
          tmp.pop();
          visited[i] = false;
        }
      }
    }
  }

  recursion();
  return max;
}

console.log(sol());
