function solution(alp, cop, problems) {
  let target_alp = 0;
  let target_cop = 0;
  for (const [alp_req, cop_req] of problems) {
    target_alp = Math.max(target_alp, alp_req);
    target_cop = Math.max(target_cop, cop_req);
  }
  // 현재 능력이 target보다 높으면 현재 능력을 target으로 바꿔줌 (꼭 해야됨)
  if (alp > target_alp) alp = target_alp;
  if (cop > target_cop) cop = target_cop;

  const size = 151;
  const dp = Array.from(new Array(size), () => new Array(size).fill(Infinity));
  dp[alp][cop] = 0;

  for (let cur_alp = alp; cur_alp <= target_alp; cur_alp++) {
    for (let cur_cop = cop; cur_cop <= target_cop; cur_cop++) {
      if (cur_alp >= target_alp && cur_cop >= target_cop) break;
      // 알고력 공부
      if (cur_alp < target_alp) {
        dp[cur_alp + 1][cur_cop] = Math.min(dp[cur_alp + 1][cur_cop], dp[cur_alp][cur_cop] + 1);
      }
      // 코딩력 공부
      if (cur_cop < target_cop) {
        dp[cur_alp][cur_cop + 1] = Math.min(dp[cur_alp][cur_cop + 1], dp[cur_alp][cur_cop] + 1);
      }
      // 문제 풀기
      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        // (현재 풀 수 있는 문제만 풀 수 있기 때문에 아래의 if 조건문 추가)
        if (cur_alp >= alp_req && cur_cop >= cop_req) {
          // 문제를 푼 후의 능력
          const alp_sum = cur_alp + alp_rwd;
          const cop_sum = cur_cop + cop_rwd;
          // 문제를 푼 후의 능력이 target보다 크면 target_alp, target_cop의 index 설정
          if (alp_sum >= target_alp && cop_sum >= target_cop) {
            dp[target_alp][target_cop] = Math.min(dp[target_alp][target_cop], dp[cur_alp][cur_cop] + cost);
          } else if (alp_sum >= target_alp) { // alp만 크면 target_alp, 문제를 푼 후의 cop index 설정
            dp[target_alp][cur_cop + cop_rwd] = Math.min(dp[target_alp][cur_cop + cop_rwd], dp[cur_alp][cur_cop] + cost);
          } else if (cop_sum >= target_cop) { // cop만 크면 target_cop, 문제를 푼 후의 alp index 설정
            dp[cur_alp + alp_rwd][target_cop] = Math.min(dp[cur_alp + alp_rwd][target_cop], dp[cur_alp][cur_cop] + cost);
          } else { // 둘다 target보다 작으면 문제푼 후의 index 설정
            dp[cur_alp + alp_rwd][cur_cop + cop_rwd] = Math.min(dp[cur_alp + alp_rwd][cur_cop + cop_rwd], dp[cur_alp][cur_cop] + cost);
          }
        }
      }
    }
  }

  return dp[target_alp][target_cop];
}

const result = solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
console.log(result);