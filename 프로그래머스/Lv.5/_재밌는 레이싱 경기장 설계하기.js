function solution(heights) {
  const sorted = heights.sort((a, b) => a - b);
  const half = Math.floor(heights.length / 2);
  const left = sorted.slice(0, half);
  const right = sorted.slice(half);
  console.log(left, right);

  let left_index = left.length - 1;
  let right_index = right.length - 1;
  let min = Number.MAX_SAFE_INTEGER;

  while (left_index > -1 && right_index > -1) {
    min = Math.min(min, right[right_index] - left[left_index]);
    right_index--;
    // console.log(min);
    if (right_index < 0) break;
    min = Math.min(min, right[right_index] - left[left_index]);
    left_index--;
    // console.log(min);
  }

  return min;
}

console.log(solution([1, 8, 5])); // 4
console.log(solution([11, 6, 4, 11])); // 5
console.log(solution([9, 9, 9, 9, 30])); // 0
console.log(solution([22, 1, 2, 16, 11, 7, 4])); // 9
console.log(solution([5, 3, 2, 12])); // 3