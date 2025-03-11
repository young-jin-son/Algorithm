function solution(n, times) {
  times = times.sort((a, b) => a - b);
  let [start, end] = [times[0], times.at(-1) * n];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const sum = times.reduce((a, b) => a + Math.floor(mid / b), 0);
    if (sum < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}