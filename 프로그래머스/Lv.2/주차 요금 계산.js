function solution(fees, records) {
  const [base_time, base_cost, unit_time, unit_cost] = fees;
  records = records.map(el => el.split(" "));
  const answer = {};
  const parked = {};
  const parking_time = {};

  const calculateFee = (t) => {
    let cost = base_cost;
    if (t > base_time) {
      cost += Math.ceil((t - base_time) / unit_time) * unit_cost;
    }
    return cost;
  }

  for (const [t, n, in_out] of records) {
    let [h, m] = t.split(":").map(Number);
    let time = h * 60 + m;

    if (in_out === "IN") {
      parked[n] = time;
    } else if (in_out === "OUT") {
      parking_time[n] = (parking_time[n] || 0) + time - parked[n];
      delete (parked[n]);
    }
  }

  for (const n in parked) {
    parking_time[n] = (parking_time[n] || 0) + (23 * 60 + 59) - parked[n];
  }

  for (const n in parking_time) {
    answer[n] = calculateFee(parking_time[n]);
  }

  return Object.entries(answer).sort((a, b) => Number(a[0]) - Number(b[0])).map(el => el[1]);
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])); // [14600, 34400, 5000] 

console.log(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"])); // [0, 591] 

console.log(solution([1, 461, 1, 10], ["00:00 0123 IN"])); // 
