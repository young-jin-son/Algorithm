const input = ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4'];

const fs = require('fs');
// const [[n, m, v], ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, v] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }

}

function bfs() {

}
// 못품


