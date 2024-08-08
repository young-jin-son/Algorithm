function solution(a, b, n) {
  let [give, take, count] = [0, 0, 0];
  while (n >= a) {
    give = parseInt(n / a) * a;
    take = parseInt(n / a) * b;
    n += take - give;
    count += take;
    console.log(give, take, n);
    console.log("COUNT: ", count);
  }
  return count;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
console.log(solution(4, 3, 20)); // 51