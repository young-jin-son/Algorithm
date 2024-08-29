function solution(n, arr1, arr2) {
  const map1 = [];
  const map2 = [];
  const full_map = [];

  for (let i = 0; i < n; i++) {
    map1.push(arr1[i].toString(2).padStart(n, "0").split("").map(Number));
    map2.push(arr2[i].toString(2).padStart(n, "0").split("").map(Number));
  }

  console.log(map1);
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(map1[i][j] || map2[i][j] ? "#" : " ");
    }
    full_map.push(row.join(""));
  }

  return full_map;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));