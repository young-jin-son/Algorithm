function solution(park, routes) {
  park = park.map(el => el.split(""));
  routes = routes.map(el => el.split(" "));
  let [curX, curY] = [0, 0];

  // find start index
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        [curX, curY] = [i, j];
        break;
      }
    }
  }

  // execute command
  for (let [command, num] of routes) {
    num = Number(num);
    let flag = true;

    if (command === "E" && curY + num < park[0].length) {
      for (let i = 1; i <= num; i++) {
        if (park[curX][curY + i] === "X") {
          flag = false;
          break;
        }
      }
      if (flag) curY += num;

    } else if (command === "W" && curY - num >= 0) {
      for (let i = 1; i <= num; i++) {
        if (park[curX][curY - i] === "X") {
          flag = false;
          break;
        }
      }
      if (flag) curY -= num;

    } else if (command === "S" && curX + num < park.length) {
      for (let i = 1; i <= num; i++) {
        if (park[curX + i][curY] === "X") {
          flag = false;
          break;
        }
      }
      if (flag) curX += num;

    } else if (command === "N" && curX - num >= 0) {
      for (let i = 1; i <= num; i++) {
        if (park[curX - i][curY] === "X") {
          flag = false;
          break;
        }
      }
      if (flag) curX -= num;

    }
  }

  return [curX, curY];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2, 1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0, 1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0, 0]