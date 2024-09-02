function solution(picks, minerals) {
  let tired = 0;
  const obj = { "diamond": 25, "iron": 5, "stone": 1 };
  const sum = picks.reduce((a, b) => a + b, 0);
  minerals = minerals.slice(0, sum * 5).map(mineral => obj[mineral]);

  let prior = [];
  for (let i = 0; i < minerals.length; i += 5) {
    prior.push([minerals.slice(i, i + 5).reduce((a, b) => a + b, 0), ...minerals.slice(i, i + 5)]);
  }
  prior.sort((a, b) => b[0] - a[0]);

  let index = 0;

  for (const el of prior) {
    while (picks[index] === 0) {
      index++;
    }

    let mineral = "";
    if (index === 0) {
      mineral = "diamond";
    } else if (index === 1) {
      mineral = "iron";
    } else if (index === 2) {
      mineral = "stone";
    } else {
      break;
    }

    for (let i = 1; i < el.length; i++) {
      tired += Math.ceil(el[i] / obj[mineral]);
    }
    picks[index]--;
  }

  return tired;
}

// console.log(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"])); // 12
// console.log(solution([0, 1, 1], ["iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"])); // 50
console.log(solution([1, 5, 0], ["diamond", "diamond", "diamond", "diamond", "stone", "diamond", "diamond", "diamond", "diamond", "diamond"]));