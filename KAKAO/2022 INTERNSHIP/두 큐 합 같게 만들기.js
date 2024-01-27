// function solution(queue1, queue2) {
//   const totalQ = [...queue1, ...queue2];
//   let q1Sum = queue1.reduce((a, b) => a + b, 0);
//   let q2Sum = queue2.reduce((a, b) => a + b, 0);
//   if (q1Sum === q2Sum) {
//     return 0;
//   }
//   let totalQSum = q1Sum + q2Sum;
//   if (totalQSum % 2) {
//     return -1;
//   }
//   const halfSum = totalQSum / 2;
//   let start = 0;
//   let end = queue1.length;
//   let answer = 0;

//   while (answer <= totalQ.length * 3) {
//     if (halfSum === q1Sum) {
//       return answer;
//     } else if (halfSum > q1Sum) {
//       q1Sum += totalQ[end];
//       end++;
//     } else {
//       q1Sum -= totalQ[start];
//       start++;
//     }
//     answer++;
//   }
//   return -1;
// }

function solution(queue1, queue2) {
  const sum1 = queue1.reduce((a, b) => a + b, 0);
  const sum2 = queue2.reduce((a, b) => a + b, 0);
  if (sum1 === sum2) return 0;
  const totalSum = sum1 + sum2;
  if (totalSum % 2) return -1;
  const halfSum = totalSum / 2;

  let answer = 0;
  let [start, end] = [0, queue1.length];
  const allQ = [...queue1, ...queue2];
  while (answer <= allQ.length * 3) {
    // while (start >= 0 && end < allQ.length) {
    if (halfSum === sum1) return answer;
    if (sum1 > halfSum) {
      sum1 -= allQ[start];
      start++;
    } else {
      sum1 += allQ[end];
      end++;
    }
    answer++;
  }
  return -1;
}

