function getGCD(a, b) {
  while (a % b !== 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return b;
}

function solution(arr) {
  let lcm = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lcm = (lcm * arr[i]) / getGCD(lcm, arr[i]);
  }
  return lcm;
}