function solution(word) {
  let answer = 0;
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  let count = 0;
  let flag = false;

  const DFS = (str) => {
    if (str.length > 5 || flag) return;

    if (str === word) {
      answer = count;
      flag = true;
      return;
    }

    count += 1;

    for (let i = 0; i < 5; i++) {
      DFS(str + vowels[i]);
    }
  };

  DFS('');

  return answer;
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189