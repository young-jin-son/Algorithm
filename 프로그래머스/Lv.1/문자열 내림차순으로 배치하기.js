function solution(s) {
  const arr = [...s].map(el => el.charCodeAt()).sort((a, b) => b - a);
  return String.fromCharCode(...arr);
}

console.log(solution("Zbcdefg")); // "gfedcbZ"