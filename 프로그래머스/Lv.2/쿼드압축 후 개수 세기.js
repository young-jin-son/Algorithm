function solution(arr) {
  arr = arr.map(row => row.map(v => v ? [0, 1] : [1, 0]));

  while (arr.length > 1) {
    const newArr = [];

    for (let i = 0; i < arr.length; i += 2) {
      const row = [];
      for (let j = 0; j < arr[0].length; j += 2) {
        let zeros = arr[i][j][0] + arr[i + 1][j][0] + arr[i][j + 1][0] + arr[i + 1][j + 1][0];
        let ones = arr[i][j][1] + arr[i + 1][j][1] + arr[i][j + 1][1] + arr[i + 1][j + 1][1];

        if (zeros === 0) {
          row.push([0, 1]);
        } else if (ones === 0) {
          row.push([1, 0]);
        } else {
          row.push([zeros, ones]);
        }
      }
      newArr.push(row);
    }
    arr = newArr;
  }

  return arr[0][0];
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]])); // [4, 9]
console.log(solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]])); // [10, 15]