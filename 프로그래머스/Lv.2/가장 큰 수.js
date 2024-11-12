function solution(numbers) {
  const answer = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');

  return +answer ? answer : '0';
}

// console.log(solution([6, 10, 2])); // "6210"
// console.log(solution([3, 30, 34, 5, 9])); // "9534330"  