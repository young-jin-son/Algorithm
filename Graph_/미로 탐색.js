const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
});

rl.on('close', () => {
  const [n, m] = inputs[0].split(" ").map(Number);
  const graph = inputs.slice(1,).map(el => el.split('').map(Number));
  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => Infinity));
  dp[0][0] = 0;
  const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  let answer = Infinity;

  const dfs = (cur_x, cur_y, tmp) => {
    if (cur_x === n && cur_y === m) {
      answer = Math.min(answer, tmp);
    }

    dp[cur_x, cur_y] = Math.min(dp[cur_x][cur_y], tmp);

    for (const [dx, dy] of directions) {
      if (graph[cur_x + dx] && graph[cur_y + dy]) {
        dfs(cur_x + dx, cur_y + dy, tmp + 1);
      }
    }
  }

  dfs(0, 0, 0);
  console.log(dp)
});