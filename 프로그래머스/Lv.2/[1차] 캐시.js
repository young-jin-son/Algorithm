function solution(cacheSize, cities) {
  const MISS = 5;
  const HIT = 1;
  if (!cacheSize) return MISS * cities.length;

  let answer = 0;
  const cache = [];
  cities.forEach((city) => {
    const cityUp = city.toLowerCase();
    const idx = cache.indexOf(cityUp);

    if (idx < 0) {
      if (cache.length >= cacheSize) cache.shift();
      answer += MISS;
    } else {
      cache.splice(idx, 1);
      answer += HIT;
    }
    cache.push(cityUp);
  });

  return answer;
}

// 캐시에있으면 있던 건 삭제하고 캐시의 맨 뒤에 넣어야 함

// console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 50
// console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])); // 21
// console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 60
// console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])); // 52
// console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
// console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
console.log(solution(3, ['a', 'a', 'b', 'b', 'a'])); // 13