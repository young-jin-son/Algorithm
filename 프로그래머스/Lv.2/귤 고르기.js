function solution(k, tangerine) {
  const obj = {};
  for (let i = 0; i < tangerine.length; i++) {
    obj[tangerine[i]] ? obj[tangerine[i]]++ : obj[tangerine[i]] = 1;
  }
  const cntSort = Object.values(obj).sort((a, b) => b - a);
  let [ans, tmp, index] = [0, 0, 0];
  while (tmp < k && index < tangerine.length) {
    tmp += cntSort[index];
    ans++;
    index++;
  }
  return ans;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));