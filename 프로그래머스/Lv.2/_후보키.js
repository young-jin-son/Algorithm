const getCombination = (arr, n) => {
  let ret = [];
  if (n === 1) return arr.map(v => [v]);

  arr.forEach((fixed, idx, ori) => {
    const rest = ori.slice(idx + 1);
    const combinations = getCombination(rest, n - 1);
    const attached = combinations.map(v => [fixed, ...v]);
    ret.push(...attached);
  });

  return ret;
}

function solution(relation) {
  let ret = [];
  relation = relation.reduce((result, row) => row.map((_, i) => [...(result[i] || []), row[i]]), []);

  for (let i = 1; i <= relation.length; i++) {
    const comArr = getCombination(relation, i);

    for (const arr of comArr) {
      let newArr = new Array(arr[0].length).fill("");
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[0].length; k++) {
          newArr[k] += " " + arr[j][k];
        }
      }

      const set = new Set(newArr);
      if (set.size === newArr.length) {
        const idxArr = arr.map(v => relation.indexOf(v));
        if (!ret.some(v => v.every(el => idxArr.includes(el)))) {
          ret.push(idxArr);
        }
      }
    }
  }

  return ret.length;
}