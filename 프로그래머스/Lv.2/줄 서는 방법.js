function getFactorials(n) {
  const f = [1];
  for (let i = 1; i < n; i++) f.push(f[i - 1] * (i + 1));
  return f;
}

function solution(n, k) {
  const answer = [];
  let nums = Array(n).fill(0).map((v, i) => v + i + 1);
  const factorials = getFactorials(n - 1);

  while (n > 1) {
    const factorial = factorials[n - 2];
    const idx = Math.ceil(k / factorial) - 1;
    answer.push(nums.splice(idx, 1)[0]);
    k -= idx * factorial;
    n--;
  }

  answer.push(nums[0]);
  return answer;
}