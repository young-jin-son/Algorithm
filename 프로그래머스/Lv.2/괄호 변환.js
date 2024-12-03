function isRight(str) {
  const stack = [];
  for (const el of str.split("")) {
    if (el === "(") stack.push(el);
    else if (stack.pop() !== "(") return false;
  }
  return true;
}

function solution(p) {
  if (!p.length) return "";

  let answer = "";
  let isBalance = 0;
  let u = [];
  let v = [];

  for (let i = 0; i < p.length; i++) {
    isBalance += (p[i] === "(") ? 1 : -1;

    if (isBalance === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1,);
      break;
    }
  }

  if (isRight(u)) {
    answer = u + solution(v);
  } else {
    answer = "(" + solution(v) + ")";
    for (let i = 1; i < u.length - 1; i++) {
      answer += u[i] === "(" ? ")" : "(";
    }
  }

  return answer;
}