function solution(brown, yellow) {
  const sum = brown + yellow;

  let height = Math.floor(Math.sqrt(sum));
  let width = sum / height;
  while (!Number.isInteger(width)) {
    height -= 1;
    width = sum / height;
  }
  return [width, height];
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
console.log(solution(14, 4)); // [6, 3]
console.log(solution(14, 6)); // [5, 4]
console.log(solution(18, 6)); // [8, 3]
console.log(solution(22, 8)); // [10, 3]
// *3보다 크거나 같으면 가로로 된거임