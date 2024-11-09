function solution(storey) {
  let answer = 0;
  const arr = String(storey).split('').map(Number).reverse();
  arr.push(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      answer += arr[i];
    } else if (arr[i] === 5) {
      answer += arr[i];
      if (arr[i + 1] >= 5) {
        arr[i + 1] += 1;
      }
    } else if (arr[i] === 10) {
      arr[i + 1] += 1;
    } else {
      answer += 10 - arr[i];
      arr[i + 1] += 1;
    }
  }

  return answer;
}

console.log(solution(555)) // 14
console.log(solutoin(999)) // 2