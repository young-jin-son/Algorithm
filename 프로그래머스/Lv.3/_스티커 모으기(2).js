function solution(sticker) {
  const n = sticker.length;

  if (n <= 2) {
    return Math.max(...sticker);
  }

  let i = 0;
  let sum = 0;
  const dp1 = [];

  while (i < n - 1) {
    sum = sticker[i];
    sum += Math.max(dp1[i - 2], dp1[i - 3]) || dp1[i - 2] || 0;
    dp1.push(sum);
    i++;
  }

  i = 1;
  const dp2 = [0];

  while (i < n) {
    sum = sticker[i];
    sum += Math.max(dp2[i - 2], dp2[i - 3]) || dp2[i - 2] || 0;
    dp2.push(sum);
    i++;
  }

  return Math.max(dp1.at(-1), dp1.at(-2), dp2.at(-1));
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])); // 36
console.log(solution([1, 3, 2, 5, 4])); // 8
console.log(solution([4, 100, 10, 1, 19, 16])); // 119