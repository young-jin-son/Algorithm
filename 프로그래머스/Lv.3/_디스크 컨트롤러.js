function solution(jobs) {
  const n = jobs.length;
  let i = 0;
  let time = 0;
  let sum = 0;
  const pq = [];

  jobs = jobs.sort((a, b) => a[0] - b[0]);

  while (i < n || pq.length) {
    while (i < n && jobs[i][0] <= time) {
      pq.push(jobs[i++]);
    }

    if (pq.length) {
      pq.sort((a, b) => b[1] - a[1]);
      const [start, duration] = pq.pop();
      time += duration;
      sum += time - start;
    } else {
      time = jobs[i][0];
    }
  }

  return Math.floor(sum / n);
}

console.log(solution([[0, 3], [1, 9], [2, 6]])); // 9