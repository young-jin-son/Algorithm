// const coordinates = ['5', '3 4', '1 1', '1 -1', '2 2', '3 3'].slice(1).map(el => el.split(' ').map(Number));

const fs = require('fs');
const coordinates = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(el => el.split(' ').map(Number));

const sortedCoordinates = coordinates.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
}).map(el => el.join(' ')).join('\n');
console.log(sortedCoordinates);