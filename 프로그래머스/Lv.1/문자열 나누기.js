function solution(s) {
  let count = 0;
  let x = undefined;
  let [isX, notX] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    if (x === undefined) {
      x = s[i];
      [isX, notX] = [0, 0];
    }
    if (s[i] === x) {
      isX++;
    } else {
      notX++;
    }
    if (isX === notX) {
      count++;
      x = undefined;
    }
  }

  if (x) count++;
  return count;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3