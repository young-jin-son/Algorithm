function solution(alp, cop, problems) {
  let targetAlp = 0;
  let targetCop = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i][0] > targetAlp) targetAlp = problems[i][0];
    if (problems[i][1] > targetCop) targetCop = problems[i][1];
  }
  // 현재 능력이 target보다 높으면 현재 능력을 target으로 바꿔줌 (꼭 해야하나?)
  if (alp > targetAlp) alp = targetAlp;
  if (cop > targetCop) cop = targetCop;

  const size = 151;
  const dp = Array.from(new Array(size), () => new Array(size).fill(Infinity));
  dp[alp][cop] = 0;

  for (let i = alp; i <= targetAlp; i++) {
    for (let j = cop; j <= targetCop; j++) {
      if (i == targetAlp && j == targetCop) break;

      // 1. 알고리즘 공부하기 -> 1을 높이기 위해서 1의 시간이 필요
      if (i < targetAlp) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      }

      // 2. 코딩 공부하기 -> 1을 높이기 위해서 1의 시간이 필요
      if (j < targetCop) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
      }

      // 3. 문제 풀기 -> 각 문제마다 문제를 풀면 올라가는 알고력과 코딩력이 정해져 있음 (같은 문제 여러 번 가능)
      for (let k = 0; k < problems.length; k++) {
        const [alpReq, copReq, alpRwd, copRwd, cost] = problems[k];

        // (현재 풀 수 있는 문제만 풀 수 있기 때문에 아래의 if 조건문 추가)
        if (i >= alpReq && j >= copReq) {
          const alpSum = i + alpRwd;
          const copSum = j + copRwd;

          if (alpSum >= targetAlp && copSum >= targetCop) {
            dp[targetAlp][targetCop] = Math.min(dp[targetAlp][targetCop], dp[i][j] + cost);
          }
          else if (alpSum >= targetAlp) {
            dp[targetAlp][j + copRwd] = Math.min(dp[targetAlp][j + copRwd], dp[i][j] + cost);
          }
          else if (copSum >= targetCop) {
            dp[i + alpRwd][targetCop] = Math.min(dp[i + alpRwd][targetCop], dp[i][j] + cost);
          }
          else {
            dp[i + alpRwd][j + copRwd] = Math.min(dp[i + alpRwd][j + copRwd], dp[i][j] + cost);
          }
        }
      }
    }
  }

  return dp[targetAlp][targetCop];
}

const result = solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
console.log(result);