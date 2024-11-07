function solution(number, k) {
  const answer = [];
  for (let i = 0; i < number.length; i++) {
    while (answer.at(-1) < number[i] && k > 0) {
      answer.pop();
      k--;
    }
    answer.push(number[i]);
  }
  return answer.slice(0, number.length - k).join('');
}

console.log(solution("1231234", 3)); // 3234
console.log(solution("4177252841", 4)); // 775841
console.log(solution("987654321", 3)); // 987654