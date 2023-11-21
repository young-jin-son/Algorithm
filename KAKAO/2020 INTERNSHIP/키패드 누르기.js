function solution(numbers, hand) {
  const getDistance = (pos1, pos2) => {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }

  let answer = '';
  let left = [3, 0];
  let right = [3, 2];

  for (const num of numbers) {
    if (num === 0) {
      const leftDistance = getDistance(left, [3, 1]);
      const rightDistance = getDistance(right, [3, 1]);
      if (leftDistance > rightDistance) {
        answer += 'R';
        right = [3, 1];
      } else if (leftDistance < rightDistance) {
        answer += 'L';
        left = [3, 1];
      } else {
        if (hand === 'right') {
          answer += 'R';
          right = [3, 1];
        } else {
          answer += 'L';
          left = [3, 1];
        }
      }
    } else if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      left = [Math.floor(num / 3), 0];
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      right = [(num / 3) - 1, 2];
    } else if (num === 2 || num === 5 || num === 8) {
      const leftDistance = getDistance(left, [Math.floor(num / 3), 1]);
      const rightDistance = getDistance(right, [Math.floor(num / 3), 1]);
      if (leftDistance > rightDistance) {
        answer += 'R';
        right = [Math.floor(num / 3), 1];
      } else if (leftDistance < rightDistance) {
        answer += 'L';
        left = [Math.floor(num / 3), 1];
      } else {
        if (hand === 'right') {
          answer += 'R';
          right = [Math.floor(num / 3), 1];
        } else {
          answer += 'L';
          left = [Math.floor(num / 3), 1];
        }
      }
    }
  }
  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
