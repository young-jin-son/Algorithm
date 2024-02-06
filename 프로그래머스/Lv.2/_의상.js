function solution(clothes) {
  let ans = 1;
  const obj = {};
  clothes.forEach((c) => obj[c[1]] ? obj[c[1]]++ : obj[c[1]] = 1);
  Object.values(obj).forEach((v) => ans *= v + 1);
  return ans - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])); // 5 
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])); // 3 // 3! / 3 + 1
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "eyewear"], ["smoky_makeup", "shirt"]])); // 7