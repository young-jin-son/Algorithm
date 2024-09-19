function solution(files) {
  const answer = [];
  const regex = /^(.*?)(\d+)(.*)?$/;

  for (let file of files) {
    const match = file.match(regex);
    answer.push([match[1], match[2], match[3] || ""]);
  }

  answer.sort((a, b) => {
    const headCompare = a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    if (headCompare !== 0) return headCompare;

    const numberCompare = Number(a[1]) - Number(b[1]);
    if (numberCompare !== 0) return numberCompare;

    return 0;
  });

  return answer.map(el => el.join(""));
}


console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]