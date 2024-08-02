function solution(today, terms, privacies) {
  const [today_y, today_m, today_d] = today.split(".");
  const expired = [];
  termsPeriod = {};
  for (const term of terms) {
    const [t, period] = term.split(" ");
    termsPeriod[t] = Number(period);
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, t] = privacies[i].split(" ");
    let [y, m, d] = date.split(".").map(Number);
    if (d > 28) {
      d = 28;
    }
    d--;
    if (d === 0) {
      d = 28;
      m--;
    }
    m += termsPeriod[t];
    if (m > 12) {
      y += parseInt(m / 12);
      m -= 12 * parseInt(m / 12);
    }

    const expiredDate = new Date(Date.UTC(y, m - 1, d));
    const todayDate = new Date(Date.UTC(today_y, today_m - 1, today_d));
    // console.log(expiredDate)
    if (todayDate > expiredDate) {
      expired.push(i + 1);
    }
  }

  return expired;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); // [1, 3]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); // [1, 4, 5]