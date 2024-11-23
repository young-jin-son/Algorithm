const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

rl.on('line', (line) => {
  inputs.push(line.split(' ').map(Number));
});

rl.on('close', () => {
  const [n, m, k] = inputs[0];
  const rails = inputs[1];

  const getPermutations = (arr, num) => {
    if (num === 1) return arr.map((v) => [v]);

    const res = [];
    arr.forEach((v, idx, array) => {
      const rest = [...array.slice(0, idx), ...array.slice(idx + 1)];
      const permutations = getPermutations(rest, num - 1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  };

  const permutations = getPermutations(rails, n);

  let answer = Infinity;

  for (const p of permutations) {
    let w = 0;
    let i = 0;
    let tmp = 0;
    let count = 0;

    while (count <= k) {
      if (p[i] + w < m) {
        w += p[i];
        i = (i + 1 + n) % n;
      } else {
        tmp += w;
        count += 1;
        w = 0;
      }
    }

    answer = Math.min(answer, tmp);
  }

  console.log(answer);
});

/**
9 25 50
1 21 2 22 3 23 4 24 10

5 20 4
5 8 10 19 7
 */