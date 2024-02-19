function solution(str1, str2) {
  const exp = /[a-zA-Z]/;
  const set1 = [];
  const set2 = [];
  const A = {};
  const B = {};
  for (let i = 0; i < str1.length - 1; i++) {
    if (exp.test(str1[i]) && exp.test(str1[i + 1])) {
      set1.push(str1.slice(i, i + 2).toUpperCase());
      const sliced = str1.slice(i, i + 2).toUpperCase();
      A[sliced] ? A[sliced]++ : A[sliced] = 1;
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (exp.test(str2[i]) && exp.test(str2[i + 1])) {
      set2.push(str2.slice(i, i + 2));
      const sliced = str2.slice(i, i + 2).toUpperCase();
      B[sliced] ? B[sliced]++ : B[sliced] = 1;
    }
  }
  // 공집합 종료조건
  if (!Object.keys(A).length && !Object.keys(B).length) return 65536;
  const intersection = {};
  const union = {};
  // 교집합
  for (const el in A) {
    if (B[el]) {
      intersection[el] = Math.min(A[el], B[el]);
    }
  }
  // 합집합
  for (const el in A) {
    if (B[el]) {
      union[el] = Math.max(A[el], B[el]);
    } else {
      union[el] = A[el];
    }
  }
  for (const el in B) {
    if (A[el]) {
      union[el] = Math.max(A[el], B[el]);
    } else {
      union[el] = B[el];
    }
  }

  const intersectionSize = Object.values(intersection).reduce((a, b) => a + b, 0);
  const unionSize = Object.values(union).reduce((a, b) => a + b, 0);
  return parseInt(intersectionSize / unionSize * 65536);
}


console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536