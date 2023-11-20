function solution(survey, choices) {
  let answer = '';
  const types = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 }
  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split('');
    if (choices[i] < 5) {
      types[type1] += (choices[i] * 3) % 4;
    } else {
      types[type2] += choices[i] % 4;
    }
  }
  answer += (types['R'] >= types['T']) ? 'R' : 'T';
  answer += (types['C'] >= types['F']) ? 'C' : 'F';
  answer += (types['J'] >= types['M']) ? 'J' : 'M';
  answer += (types['A'] >= types['N']) ? 'A' : 'N';
  return answer;
}