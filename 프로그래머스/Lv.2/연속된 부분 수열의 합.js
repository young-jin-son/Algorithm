function solution(sequence, k) {
  const n = sequence.length - 1;
  let [start, end] = [0, 0];
  let [best_start, best_end] = [0, n];
  let sum = sequence[0];

  while (end <= n) {
    if (sum < k) {
      end++;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      start++;
    } else if (sum === k) {
      if ((end - start) < (best_end - best_start)) {
        best_start = start;
        best_end = end;
      }
      end++;
      sum += sequence[end];
    }
  }

  return [best_start, best_end];
}


console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]