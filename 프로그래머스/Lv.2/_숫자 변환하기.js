function solution(x, y, n) {
  let answer = 0;
  const dp = [x];
  let i = 0;

  while (dp.at(-1).at(-1) < y) {
    i++;
    for (const num of dp) {
      dp.push(num * 3, num * 2, num + n);
    }
    // dp.push(arr);
  }


  return answer;
}

console.log(solution(10, 40, 5)); // 2 
// console.log(solution(10, 40, 30)); // 1
// console.log(solution(2, 5, 4)); // -1

// console.log(solution(4, 4, 1));