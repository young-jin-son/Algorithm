function solution(numbers) {
  const answer = [];

  for (const num of numbers) {
    const binaryNum = ["0", ...(num.toString(2).split(""))];

    for (let i = binaryNum.length - 1; i >= 0; i--) {
      if (binaryNum[i] === "0") {
        binaryNum[i] = "1";
        for (let j = i + 1; j < binaryNum.length; j++) {
          if (binaryNum[j] === "1") {
            binaryNum[j] = "0";
            break;
          }
        }
        break;
      }
    }
    answer.push(parseInt(binaryNum.join(""), 2));
  }

  return answer;
}

console.log(solution([2, 7])); // [3, 11] 