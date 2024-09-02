function solution(plans) {
  const answer = [];
  const stack = [];

  plans = plans.map((el) => {
    const [h, m] = el[1].split(":").map(Number);
    const start_time = h * 60 + m;
    const end_time = start_time + Number(el[2]);
    return [el[0], start_time, end_time];
  }).sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < plans.length - 1; i++) {
    let [cur_name, cur_startTime, cur_endTime] = plans[i];
    let [next_name, next_startTime, next_endTime] = plans[i + 1];

    if (cur_endTime === next_startTime) {
      answer.push(cur_name);
    } else if (cur_endTime > next_startTime) {
      stack.push([cur_name, cur_endTime - next_startTime]);
    } else {
      answer.push(cur_name);
      while (cur_endTime < next_startTime && stack.length) {
        let [pop_name, pop_time] = stack.pop();
        if (next_startTime - cur_endTime >= pop_time) {
          cur_endTime += pop_time;
          answer.push(pop_name);
        } else {
          pop_time -= next_startTime - cur_endTime;
          cur_endTime = next_startTime;
          stack.push([pop_name, pop_time]);
        }
      }
    }
    // console.log("stack: ", stack);
    // console.log("answer: ", answer, "\n")
  }

  answer.push(plans[plans.length - 1][0]);
  if (stack.length) {
    answer.push(...stack.reverse().map(el => el[0]));
  }

  return answer;
}

/**
 * [과제명, 과제시작시간, 과제걸리는 시간] 먼저 끝나는 과제순으로 출력하기임. 중간에 뒤에 과제 시작시간이 되면 멈추고 스택에 저장. 시간 남으면 풀고
 * 그래서 시작시간은 11*60+40이런 식으로 시간을 그냥 숫자로 변해서 저장함. 끝나는 시간도 거기에 걸리는 시간 더해서 저장. 그래서 반복문에서 다음 꺼 시작시간을 보면서 
 */
console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]])); // ["korean", "english", "math"]
console.log(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]])); // ["science", "history", "computer", "music"]
// console.log(solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]])); // ["bbb", "ccc", "aaa"]
console.log(solution([["first", "11:40", "30"], ["second", "12:50", "30"]]));
// 여기서 문제가 생기는군. 왜?