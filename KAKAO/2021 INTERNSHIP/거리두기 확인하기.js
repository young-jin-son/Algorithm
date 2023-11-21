function solution(places) {
  const answer = [];
  for (const place of places) {
    let flag = 1;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (place[row][col] === 'P') {
          // 1. 바로 옆에 앉은 경우
          if (
            (row - 1 >= 0 && place[row - 1][col] === 'P') ||
            (row + 1 < 5 && place[row + 1][col] === 'P') ||
            (col - 1 >= 0 && place[row][col - 1] === 'P') ||
            (col + 1 < 5 && place[row][col + 1] === 'P')
          ) {
            flag = 0;
            break;
          }
          // 2. 대각선에 앉은 경우
          for (let i = row - 1; i <= row + 1; i += 2) {
            for (let j = col - 1; j <= col + 1; j += 2) {
              if (i >= 0 && i < 5 && j >= 0 && j < 5 && place[i][j] === 'P') {
                if (place[i][col] !== 'X' || place[row][j] !== 'X') {
                  flag = 0;
                  break;
                }
              }
            }
          }
          if (!flag) break;
          // 3. 두 칸 옆에 앉은 경우
          if (
            (row - 2 >= 0 && place[row - 2][col] === 'P' && place[row - 1][col] !== 'X') ||
            (row + 2 < 5 && place[row + 2][col] === 'P' && place[row + 1][col] !== 'X') ||
            (col - 2 >= 0 && place[row][col - 2] === 'P' && place[row][col - 1] !== 'X') ||
            (col + 2 < 5 && place[row][col + 2] === 'P' && place[row][col + 1] !== 'X')
          ) {
            flag = 0;
            break;
          }
        }
      }
    }
    answer.push(flag);
  }
  return answer;
}

console.log(solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]));
