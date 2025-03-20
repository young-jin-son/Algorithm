const TIME_UNIT = 60;

function convertTimeToMinute(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * TIME_UNIT + minute;
}

function solution(n, t, m, timetable) {
  const first_bus_time = 9 * TIME_UNIT;
  let passengers = 0;
  let line_index = 0;
  let answer = 0;

  timetable = timetable.sort().map(time => convertTimeToMinute(time));

  for (let i = 0; i < n; i++) {
    const bus_time = first_bus_time + i * t;
    passengers = 0;
    while (passengers < m && timetable[line_index] <= bus_time) {
      line_index += 1;
      passengers += 1;
    }
  }

  if (passengers === m) {
    answer = timetable[line_index - 1] - 1;
  } else {
    const last_bus_time = first_bus_time + (n - 1) * t;
    answer = last_bus_time;
  }

  const hour = Math.floor(answer / TIME_UNIT).toString().padStart(2, 0);
  const minute = (answer % TIME_UNIT).toString().padStart(2, 0);
  return `${hour}:${minute}`;
}