function solution(s) {
  const numArr = s.split(' ').map(Number).sort((a, b) => a - b);
  return `${numArr[0]} ${numArr[numArr.length - 1]}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));