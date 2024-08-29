function solution(n, m) {
  let [a, b, r] = [n, m, n % m];
  while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
  }

  return [b, n * m / b];
}