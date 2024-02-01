function solution(n, words) {
  const stack = [words[0]];
  let lastChar = [...words[0]].at(-1);
  for (let i = 1; i < words.length; i++) {
    if (stack.includes(words[i]) || lastChar !== words[i][0]) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    } else {
      stack.push(words[i]);
      lastChar = [...words[i]].at(-1);
    }
  }
  if (stack.length === words.length) return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1, 3]
