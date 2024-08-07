function getDivisorNum(n) {
  const root = Math.sqrt(n);
  let count = (root % 1) ? 0 : 1;
  for (let i = 1; i < root; i++) {
    count += (n % i) ? 0 : 2;
  }
  return count;
}

function solution(number, limit, power) {
  let answer = 0;
  let count = 0;
  for (let i = 1; i <= number; i++) {
    count = getDivisorNum(i);
    answer += (count > limit ? power : count);
  }
  return answer;
}

// console.log(solution(5, 3, 2)); // 10
// console.log(solution(10, 3, 2)); // 21
console.log(solution(15, 10, 1)); // 45
// [1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 2, 6, 2, 4, 4]
// console.log(getDivisorNum(11));