function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += String(i).repeat(parseInt(food[i] / 2));
  }
  answer += "0" + answer.split("").reverse().join("");
  return answer;
}

console.log(solution([1, 3, 4, 6]) === "1223330333221"); // "1223330333221"
console.log(solution([1, 7, 1, 2]) === "111303111"); // "111303111"