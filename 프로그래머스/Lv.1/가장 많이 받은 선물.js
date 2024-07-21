function solution(friends, gifts) {
  const n = friends.length;
  gifts = gifts.map(el => el.split(' '));
  const history = {};
  const score = {};
  const giftNum = {};

  for (const name of friends) {
    history[name] = {};
    score[name] = 0;
    giftNum[name] = 0;
  }

  for (const [giver, taker] of gifts) {
    if (!history[giver][taker]) history[giver][taker] = 0;
    history[giver][taker]++;
    score[giver]++;
    score[taker]--;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const [a, b] = [friends[i], friends[j]];
      const [aToB, bToA] = [history[a][b] || 0, history[b][a] || 0];

      if (aToB > bToA) {
        giftNum[a]++;
      } else if (aToB < bToA) {
        giftNum[b]++;
      } else {
        if (score[a] > score[b]) {
          giftNum[a]++;
        } else if (score[a] < score[b]) {
          giftNum[b]++;
        }
      }
    }
  }

  return Math.max(...Object.values(giftNum));
}

console.log(solution(['m', 'r', 'f', 'n'], ['m f', 'm f', 'r m', 'r m', 'r m', 'f m', 'f r', 'n m'])); // 2
console.log(solution(
  ["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
)); // 4
console.log(solution(
  ["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]
)); // 0