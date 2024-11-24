function getGCD(a, b) {
  let r = a % b;
  while (r) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
}

function solution(arrayA, arrayB) {
  if (arrayA.length === 1) {
    let [a, b] = [arrayA[0], arrayB[0]];
    if (a === b) return 0;
    return Math.max(a, b);
  }

  let answer = 0;
  let gcd_a = getGCD(arrayA[0], arrayA[1]);
  let gcd_b = getGCD(arrayB[0], arrayB[1]);
  for (let i = 2; i < arrayA.length; i++) {
    gcd_a = getGCD(gcd_a, arrayA[i]);
  }
  for (let i = 2; i < arrayB.length; i++) {
    gcd_b = getGCD(gcd_b, arrayB[i]);
  }

  console.log(gcd_a, gcd_b);

  let gcd_a_is_valid = true;
  for (let i = 0; i < arrayB.length; i++) {
    if (arrayB[i] % gcd_a === 0) {
      gcd_a_is_valid = false;
      break;
    }
  }
  if (gcd_a_is_valid) {
    answer = gcd_a;
  }

  let gcd_b_is_valid = true;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] % gcd_b === 0) {
      gcd_b_is_valid = false;
      break;
    }
  }
  if (gcd_b_is_valid) {
    answer = Math.max(answer, gcd_b);
  }

  return answer;
}