function solution(dice) {
  const n = dice.length / 2;
  const answer = [];
  const sum = dice.map(el => el.reduce((a, b) => a + b, 0));
  let max = Math.max(...sum);
  let idxOfMax = sum.indexOf(max);
  answer.push(idxOfMax + 1);
  dice[idxOfMax] = new Array(6).fill(0);

  while (answer.length < n) {
    const cnt = new Array(dice.length).fill(0);
    for (let i = 0; i < dice.length; i++) {
      for (let j = 0; j < dice.length; j++) {
        if (i === j) continue;
        for (let l = 0; l < 6; l++) {
          for (let k = 0; k < 6; k++) {
            if (dice[i][l] > dice[j][k]) {
              cnt[i]++;
            }
          }
        }
      }
    }

    max = Math.max(...cnt);
    idxOfMax = cnt.indexOf(max);
    answer.push(idxOfMax + 1);
    dice[idxOfMax] = [0, 0, 0, 0, 0, 0];
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]])) // [1, 4]
console.log(solution([[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]])) // 2
console.log(solution([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]])) // [1, 3]