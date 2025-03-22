function getPoints(num) {
  const points = [num];
  while (num !== 1) {
    if (num % 2) num = num * 3 + 1;
    else num = num / 2;
    points.push(num);
  }
  return points;
}

function solution(k, ranges) {
  let num = k;
  const points = getPoints(k);
  const answer = [];

  for (const [x, y] of ranges) {
    if (x > points.length + y - 1) {
      answer.push(-1);
      continue;
    }

    let area = 0;
    for (let i = x; i < points.length + y - 1; i++) {
      area += (points[i] + points[i + 1]) / 2;
    }
    answer.push(area.toFixed(1));
  }

  return answer;
}