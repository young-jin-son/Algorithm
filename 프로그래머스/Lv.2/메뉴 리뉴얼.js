function getCombinations(arr, size) {
  const result = [];

  function combine(tmp, start) {
    if (tmp.length === size) {
      result.push(tmp.join(""));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combine([...tmp, arr[i]], i + 1);
    }
  }

  combine([], 0);
  return result;
}

function solution(orders, course) {
  const answer = [];

  for (const c of course) {
    const menues = new Map();

    for (const order of orders) {
      const combinations = getCombinations(order.split("").sort(), c);
      for (const combination of combinations) {
        menues.set(combination, (menues.get(combination) || 0) + 1);
      }
    }

    let maxCount = 0;
    for (const count of menues.values()) {
      if (count > maxCount) maxCount = count;
    }

    if (maxCount > 1) {
      const mostFrequent = [];
      for (const [menu, count] of menues.entries()) {
        if (count === maxCount) {
          mostFrequent.push(menu);
        }
      }

      answer.push(...mostFrequent);
    }
  }

  return answer.sort();
}