const fs = require('fs');
const grade = fs.readFileSync('/dev/stdin').toString().trim();

if (grade === 'A+') {
  console.log('4.3');
} else if (grade === 'A0') {
  console.log('4.0');
} else if (grade === 'A-') {
  console.log('3.7');
} else if (grade === 'B+') {
  console.log('3.3');
} else if (grade === 'B0') {
  console.log('3.0');
} else if (grade === 'B-') {
  console.log('2.7');
} else if (grade === 'C+') {
  console.log('2.3');
} else if (grade === 'C0') {
  console.log('2.0');
} else if (grade === 'C-') {
  console.log('1.7');
} else if (grade === 'D+') {
  console.log('1.3');
} else if (grade === 'D0') {
  console.log("1.0");
} else if (grade === 'D-') {
  console.log('0.7');
} else if (grade === 'F') {
  console.log('0.0');
}