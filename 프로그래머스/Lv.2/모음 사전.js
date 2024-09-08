function solution(word) {
  let answer = 0;
  const dictionary = { "A": 0, "E": 1, "I": 2, "O": 3, "U": 4 };

  const multiplied = [1];
  for (let i = 1; i < 5; i++) {
    multiplied.push(multiplied[i - 1] + 5 ** i);
  }

  for (let i = 0; i < word.length; i++) {
    answer += multiplied[4 - i] * dictionary[word[i]] + 1;
  }

  return answer;
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189