function solution(friends, gifts) {
  gifts = gifts.map(el => el.split(' '));
  const history = {};
  const score = {};
  const giftNum = {};

  for (const name of friends) {
    score[name] = 0;
    giftNum[name] = 0;
    history[name] = {};
  }

  for (const [giver, taker] of gifts) {
    score[giver]++;
    score[taker]--;
    if (history[giver][taker]) {
      history[giver][taker]++;
    } else {
      history[giver][taker] = 1;
    }
  }

  for (let i = 0; i < friends.length; i++) {
    const name1 = friends[i];
    for (let j = i + 1; j < friends.length; j++) {
      const name2 = friends[j];
      if (history[name1][name2] === history[name2][name1] && history[name1] && history[name2]) {
        if (score[name1] > score[name2]) {
          giftNum[name1]++;
        } else if (score[name1] < score[name2]) {
          giftNum[name2]++;
        }
      } else if (history[name1][name2] > history[name2][name1] || !history[name2][name1]) {
        giftNum[name1]++;
      } else {
        giftNum[name2]++;
      }
    }
  }
  return Math.max(...(Object.values(giftNum)));
}

console.log(solution(['m', 'r', 'f', 'n'], ['m f', 'm f', 'r m', 'r m', 'r m', 'f m', 'f r', 'n m'])); // 2
console.log(solution(
  ["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"]
)); // 4
console.log(solution(
  ["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"]
)); // 0
// console.log(solution());