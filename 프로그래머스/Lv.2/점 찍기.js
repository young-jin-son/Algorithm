function solution(k, d) {
  let dotsCount = 0;
  for (let i = 0; i <= d; i += k) {
    dotsCount += Math.floor(Math.sqrt(d ** 2 - i ** 2) / k) + 1;
  }
  return dotsCount;
}