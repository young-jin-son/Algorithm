function solution(queue1, queue2) {
  const totalQ = [...queue1, ...queue2];
  let q1Sum = queue1.reduce((a, b) => a + b, 0);
  let q2Sum = queue2.reduce((a, b) => a + b, 0);
  if (q1Sum === q2Sum) {
    return 0;
  }
  let totalQSum = q1Sum + q2Sum;
  if (totalQSum % 2) {
    return -1;
  }
  const halfSum = totalQSum / 2;
  let start = 0;
  let end = queue1.length;
  let answer = 0;

  while (answer <= totalQ.length * 3) {
    if (halfSum === q1Sum) {
      return answer;
    } else if (halfSum > q1Sum) {
      q1Sum += totalQ[end];
      end++;
    } else {
      q1Sum -= totalQ[start];
      start++;
    }
    answer++;
  }
  return -1;
}