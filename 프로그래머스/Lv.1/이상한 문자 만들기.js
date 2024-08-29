function solution(s) {
  let answer = "";
  let index = 0;

  for (let char of s) {
    if (char === " ") {
      index = 0;
    } else {
      if (index % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
      index++;
    }
    answer += char;
  }
  return answer;
}