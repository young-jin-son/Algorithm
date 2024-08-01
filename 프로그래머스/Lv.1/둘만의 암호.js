function solution(s, skip, index) {
  s = s.split('').map(el => el.charCodeAt());
  skip = new Set(skip.split('').map(el => el.charCodeAt()));

  const answer = s.map(el => {
    let steps = index;

    while (steps > 0) {
      el++;
      if (el > 122) el = 97;
      if (!skip.has(el)) steps--;
    }

    return el;
  });

  return String.fromCharCode(...answer);
}

console.log(solution("aukks", "wbqd", 5)); // happy
console.log(solution("z", "a", 1)) // "b"
console.log(solution("a", "bcdefghijk", 20)) // "o"
console.log(solution("z", "abcdefghij", 20))// "n"
console.log(solution("aukks", "wbqd", 5))// "happy"
console.log(solution("abcde", "bcd", 2))// "ffffg"
console.log(solution("yyyyy", "za", 2))// "ccccc"
console.log(solution("ybcde", "az", 1))// "bcdef"
console.log(solution("zzzzzz", "abcdefghijklmnopqrstuvwxy", 6))// "zzzzzz"
console.log(solution("bcdefghijklmnopqrstuvwxyz", "a", 1))// "cdefghijklmnopqrstuvwxyzb"