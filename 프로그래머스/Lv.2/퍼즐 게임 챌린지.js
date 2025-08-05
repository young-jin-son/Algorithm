function solution(diffs, times, limit) {
  const n = times.length;
  let [start, end, mid] = [1, limit, Math.floor(limit / 2)];

  while (start <= end) {
    let tmp = times[0];
    let [tp, tc] = [0, 0];
    mid = Math.floor((start + end) / 2);

    for (let i = 1; i < n; i++) {
      tp = times[i - 1];
      tc = times[i];
      if (diffs[i] <= mid) tmp += tc;
      else tmp += tc * (diffs[i] - mid + 1) + tp * (diffs[i] - mid);
    }

    if (limit < tmp) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}