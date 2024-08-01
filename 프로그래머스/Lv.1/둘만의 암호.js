function solution(s, skip, index) {
  asciiS = s.split('').map(el => el.charCodeAt());
  skip = skip.split('').map(el => el.charCodeAt());
  console.log(asciiS);
  console.log(skip);
  let answer = String.fromCharCode(...asciiS);
  return answer;
}

console.log(solution("aukks", "wbqd", 5)); // happy