function solution(s) {
  let flag = 1;
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      flag = 1;
      answer += s[i];
    } else if (flag) {
      if (/[a-z]/.test(s[i])) {
        answer += s[i].toLocaleUpperCase();
      } else {
        answer += s[i];
      }
      flag = 0;
    } else {
      answer += s[i].toLocaleLowerCase();
    }
  }
  return answer;
}

console.log(solution("3people unFollowed me"));
console.log(solution(" for the last week"));
console.log(solution('A B'));
console.log(solution('aBC D3eF g4 567ab c'));