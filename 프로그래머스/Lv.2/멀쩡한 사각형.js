function solution(w, h) {
  let answer = 0;
  for (let i = 1; i <= w; i++) {
    answer += h - Math.ceil(h / w * i);
  }
  return answer * 2;
}