const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', (input) => {
  inputs.push(input.trim().split(' ').map(Number));
});

rl.on('close', () => {
  const [N, M] = inputs[0];
  const graph = [];
  const attacks = [];
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    graph.push(inputs[i]);
  }
  for (let i = N + 1; i <= N + 2; i++) {
    attacks.push(inputs[i]);
  }

  for (const [start, end] of attacks) {
    for (let i = start - 1; i <= end - 1 && i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (graph[i][j] === 1) {
          graph[i][j] = 0;
          break;
        }
      }
    }
  }

  answer = graph.map(el => el.reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);

  console.log(answer)
});
