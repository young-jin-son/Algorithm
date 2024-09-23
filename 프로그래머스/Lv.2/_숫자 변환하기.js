function solution(x, y, n) {
  let answer = 0;
  const dp = [];
  let i = 0;

  while (dp.at(-1).at(-1) < y) {
    i++;
    const prev = [...dp];
    for (const num of prev) {
      dp.push(num * 3, num * 2, num + n);
    }
  }


  return answer;
}

console.log(solution(10, 40, 5)); // 2 
// console.log(solution(10, 40, 30)); // 1
// console.log(solution(2, 5, 4)); // -1

// console.log(solution(4, 4, 1));