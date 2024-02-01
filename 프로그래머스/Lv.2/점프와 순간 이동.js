function solution(n) {
  let ans = 0;
  while (n) {
    if (n % 2) {
      n -= 1;
      ans++;
    } else {
      n /= 2;
    }
  }
  return ans;
}

console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
console.log(solution(5001)); // 6 
