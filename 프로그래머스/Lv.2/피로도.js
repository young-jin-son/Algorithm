const getPermutation = (permu, rests, output) => {
  if (!rests.length) {
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)]
    getPermutation([...permu, v], rest, output);
  })
}

function solution(k, dungeons) {
  const n = dungeons.length;
  let ans = 0;
  const permutation = [];
  getPermutation([], new Array(n).fill(0).map((v, i) => i), permutation);

  for (const set of permutation) {
    let cnt = 0;
    let tmp = k;
    for (const index of set) {
      if (tmp <= 0) break;
      const [nessasary, consumtion] = dungeons[index];
      if (nessasary <= tmp) {
        cnt++;
        tmp -= consumtion;
      }
    }
    ans = Math.max(ans, cnt);
    if (ans === n) return ans;
  }
  return ans;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]])); // 3
// console.log(solution(80, [[50, 40], [80, 20], [30, 10]])); // 3
/**
 * [80, 20], [30, 10], [50, 40]
 * 일단 필요피로도가 높은 것 부터 가야 함
 * [80, 20] 간 후에 어떻게 정함?
 * k = 60. k - 40을 했을 때 30을 갈 수 있냐?
 * 많아지면 복잡할거같은데
 * [30, 10], [80, 20], [50, 40]
 */