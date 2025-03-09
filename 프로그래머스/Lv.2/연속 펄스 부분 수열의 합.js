function solution(sequence) {
  const N = sequence.length;
  const firstNum = sequence[0];
  const positivePulse = [firstNum];
  const negativePulse = [-firstNum];
  let positivePulseMax = firstNum;
  let negativePulseMax = -firstNum;

  for (let i = 1; i < N; i++) {
    const num = sequence[i];
    if (i % 2) {
      positivePulse.push(Math.max(0, positivePulse[i - 1]) - num);
      negativePulse.push(Math.max(0, negativePulse[i - 1]) + num);
    } else {
      positivePulse.push(Math.max(0, positivePulse[i - 1]) + num);
      negativePulse.push(Math.max(0, negativePulse[i - 1]) - num);
    }
    positivePulseMax = Math.max(positivePulseMax, positivePulse.at(-1));
    negativePulseMax = Math.max(negativePulseMax, negativePulse.at(-1));
  }

  return Math.max(positivePulseMax, negativePulseMax);
}