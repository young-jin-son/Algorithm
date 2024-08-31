function solution(sequence, k) {
  const n = sequence.length;
  let [start, end] = [0, 0];
  let [best_start, best_end] = [0, n];
  let sum = sequence[0];

  // [1,2,3,4,5], 7 => [2,3]
  while (start < end) {
    if (sum < k) {
      end++;
      sum += sequence[end];
    } else if (sum > k) {
      sum -= sequence[start];
      start++;
      sum += sequence[start]
    } else if (sum === k) {
      if ((end - start) < (best_end - best_start)) {
        best_start = start;
        best_end = end;
      }
    }
  }

  return [best_start, best_end];
  // for (let i = n - 1; i > -1; i--) {
  //   let tmp = sequence[i];
  //   let j = i;

  //   while (tmp < k) {
  //     j--;
  //     tmp += sequence[j];
  //   }

  //   if (tmp === k) {
  //     if ((i - j) <= (end - start)) {
  //       start = j;
  //       end = i;
  //     } else {
  //       break;
  //     }
  //   }
  // }
}

console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]