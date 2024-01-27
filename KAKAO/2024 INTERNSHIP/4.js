function solution(coin, cards) {
  let answer = 0;
  let idx = cards.length / 3;
  const myCard = cards.slice(0, idx);

  while (idx < cards.length && coin) {
    let flag = 0;
    const [new1, new2] = [cards[idx], cards[idx + 1]];
    idx++;
    for (let i = 0; i < myCard.length; i++) {
      if (myCard[i] + new1 === 13) {
        if (flag) {
          myCard.push(new1);
        } else {
          myCard.splice(i, 1);
          flag = 1;
        }
        coin--;
      }
      if (myCard[i] + new2 === 13) {
        if (flag) {
          myCard.push(new2);
        } else {
          myCard.splice(i, 1);
          flag = 1;
        }
        coin--;
      }
      // console.log(cards.length, idx, coin);
      if (cards.length - idx <= coin) {
        myCard.push(new1);
        myCard.push(new2);
        coin -= 2;
      } else if (cards.length - idx === coin - 2) {
        myCard.push(new2);
        coin -= 1;
      }
    }

    if (!flag) {
      for (let i = 0; i < myCard.length - 1; i++) {
        for (let j = i + 1; j < myCard.length; j++) {
          if (myCard[i] + myCard[j] === 13) {
            myCard.splice(i, 1);
            myCard.splice(j - 1, 1);
            flag = 1;
            break;
          }
        }
      }
    }

    answer++;

    if (!flag) break;
  }

  if (coin) {
    answer += Math.ceil(coin / 2);
  }

  return answer;
}

console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4])); // 5
console.log(solution(3, [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12])); // 2
console.log(solution(2, [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7])); // 4
console.log(solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])); // 1