function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let term = 0;
    for (let j = i + 1; j < prices.length; j++) {
      term++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(term);
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4,3,1,1,0]