function solution(picks, minerals) {
  let tired = 0;
  const diamond_t = { 25: 1, 5: 1, 1: 1 };
  const iron_t = { 25: 5, 5: 1, 1: 1 };
  const stone_t = { 25: 25, 5: 5, 1: 1 };
  const obj = { "diamond": 25, "iron": 5, "stone": 1 };
  minerals = minerals.map(mineral => obj[mineral]);

  // prior 대로 정렬해야됨. 내림차순
  let prior = [];
  for (let i = 0; i < minerals.length; i += 5) {
    prior.push([minerals.slice(i, i + 5).reduce((a, b) => a + b, 0), ...minerals.slice(i, i + 5)]);
  }
  prior.sort((a, b) => b[0] - a[0]);

  console.log(prior);

  let index = 0;
  prior.map(el => {
    if (picks[index] === 0) {
      index++;
    }
    let mineral = "";
    if (index === 0) {
      mineral = "diamond";
    } else if (index === 1) {
      mineral === "iron";
    } else if (index === 2) {
      mineral === "stone";
    }

    let tmp = 0;
    for (let i = 1; i < el.length; i++) {
      console.log(el[i]);
      tmp += Math.ceil(el[i] / obj[mineral]);
    }
    console.log(tmp);
    return tmp;
  })
  console.log(prior);
  /**
   * 5개씩 잘라서 우선순위. 만약
   * diamond:3 , iron: 2, stone:1의 우선순위라면
   * [dia, dia, iron, stone, stone] = 10 
   * => stone_tired = 25+25+5+1+1 = 57
   * => iron_tired = 5+5+1+1+1 = 13
   * => dia_tired = 5 
   * 
   * [iron, iron, iron, iron, iron] = 10 
   * => stoned_t = 25
   * => iron_t = 5
   * => dia_t = 5
   * 
   * 안됨. dia: 25, iron: 5, stone: 1의 우선순위로 하면 ㄱㅊ을듯
   */

  // console.log(minerals);

  // for (const mineral of minerals) {

  // }
  return prior.reduce((a, b) => a + b, 0);
}

console.log(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"])); // 12
console.log(solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"])); // 50