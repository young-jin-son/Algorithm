function solution(today, terms, privacies) {
  today = new Date(today.replace(/\./g, '-'));
  const answer = [];
  for (let i = 0; i < privacies.length; i++) {
    const [pDate, pType] = privacies[i].split(' ');
    for (let j = 0; j < terms.length; j++) {
      const [tType, tPeriod] = terms[j].split(' ');
      if (pType === tType) {
        const [pYear, pMonth, pDay] = pDate.split('.').map(Number);
        const newDay = (pDay - 1) ? (pDay - 1) : 28;
        const newMonth = (newDay === 28) ? (pMonth + Number(tPeriod) - 1) % 12 : (pMonth + Number(tPeriod)) % 12;
        const newYear = pYear + parseInt((pMonth + Number(tPeriod)) / 13);
        const newDateString = `${String(newYear).padStart(2, '0')}-${String(newMonth).padStart(2, '0')}-${String(newDay).padStart(2, '0')}`;
        const newDate = new Date(`${newDateString}`);
        if (newDate < today) {
          answer.push(i + 1);
        }
      }
    }
  }
  return answer;
}

// console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])) // => 2019.5.28 / 2020.2.14 / 2020.1.1 / 2019.11.28 / 2019.3.17