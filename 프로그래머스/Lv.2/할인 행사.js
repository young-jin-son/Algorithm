function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const sliced = discount.slice(i, i + 10);
    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (sliced.filter(x => x === want[j]).length < number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])); // 3