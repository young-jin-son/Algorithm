function solution(stones, k) {
  let left = 0;
  let right = 200_000_000;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    for (const n of stones) {
      if (n - mid <= 0) { count++; }
      else { count = 0; }
      if (count >= k) { break; }
    }

    if (count >= k) { right = mid - 1; }
    else { left = mid + 1; }
  }

  return left;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)); // 3
// console.log(solution()); // 
// console.log(solution()); // 
// console.log(solution()); // 