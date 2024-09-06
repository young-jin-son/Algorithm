function solution(genres, plays) {
  const album = [];
  const info = {};
  for (let i = 0; i < genres.length; i++) {
    if (!info[genres[i]]) {
      info[genres[i]] = { count: 0, list: [] };
    }
    info[genres[i]].count += plays[i];
    info[genres[i]].list.push([i, plays[i]]);
  }

  const popularGenre = Object.entries(info).sort((a, b) => b[1].count - a[1].count);
  for (const g of popularGenre) {
    g[1].list = g[1].list.sort((a, b) => b[1] - a[1] || a[0] - b[0]).slice(0, 2);

    for (const music of g[1].list) {
      album.push(music[0]);
    }
  }

  return album;
}

// console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])); // [4,1,3,0]
// console.log(solution(["classic", "classic", "classic", "pop", "pop"], [500, 600, 1500, 3000, 1])); // [4,1,3,0]
console.log(solution(["a", "b", "b", "a", "c"], [5, 1, 1, 0, 6])); // [4,1,3,0]