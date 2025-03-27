function solution(enroll, referral, seller, amount) {
  const refer = {};
  const profit = {};

  enroll.forEach((e, i) => refer[e] = referral[i]);

  for (let i = 0; i < seller.length; i++) {
    let [s, p] = [seller[i], amount[i] * 100];
    let [give, take] = [0, 0];

    while (refer[s]) {
      give = Math.floor(p * 0.1);
      take = p - give;
      profit[s] = (profit[s] || 0) + take;
      if (take < 1) break;
      p = give;
      s = refer[s];
    }
  }

  return enroll.map((e) => profit[e] || 0);
}