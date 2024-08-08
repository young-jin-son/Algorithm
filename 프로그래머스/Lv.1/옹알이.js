function solution(babbling) {
  const obj = { "aya": 3, "ye": 2, "woo": 3, "ma": 2 };
  let count = 0;
  let prev = "";
  let index = 0;
  let flag = true;
  let [two, three] = ["", ""];

  for (let bab of babbling) {
    prev = "";
    index = 0;
    flag = true;
    while (index < bab.length) {
      two = bab.slice(index, index + 2);
      three = bab.slice(index, index + 3);
      if (obj[two] && prev !== two) {
        prev = two;
        index += 2;
      } else if (obj[three] && prev !== three) {
        prev = three;
        index += 3;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2