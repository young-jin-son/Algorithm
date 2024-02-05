function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    if ((i + 1) % n === 0) {
      answer.push(n);
    } else {
      answer.push(Math.max((i + 1) % n, Math.ceil((i + 1) / n)));
    }
  }
  return answer;
}

console.log(solution(3, 2, 5)); // [3, 2, 2 , 3]
console.log(solution(4, 7, 14)); // [4, 3, 3, 3, 4, 4, 4, 4]