function solution(numbers) {
  const n = numbers.length;
  const answer = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack.at(-1)]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1] 
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
console.log(solution([4, 3, 2, 1, 2, 3])); // [-1, -1, 3, 2, 3, -1]