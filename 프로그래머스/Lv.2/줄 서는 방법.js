function getFactorial(n) {
  let factorial = n;
  for (let i = n - 1; i > 1; i--) factorial *= i;
  return factorial;
}

function solution(n, k) {
  const answer = [];
  let nums = Array(n).fill(0).map((v, i) => v + i + 1);

  while (n > 1) {
    let factorial = getFactorial(n - 1);
    let tmp = Math.ceil(k / factorial) - 1;
    answer.push(nums[tmp]);
    nums = [...nums.slice(0, tmp), ...nums.slice(tmp + 1,)];
    k -= tmp * factorial;
    n--;
  }

  answer.push(...nums)
  return answer;
}