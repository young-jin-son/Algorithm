function solution(book_time) {
  const rooms = [];

  const times = book_time.map(el => el.map(time => {
    const h = Number(time.slice(0, 2));
    const m = Number(time.slice(3,));
    return h * 60 + m;
  }));

  const book_sorted = times.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  for (const [start, end] of book_sorted) {
    if (!rooms.length) {
      rooms.push(end + 10);
      continue;
    }

    if (rooms[0] > start) {
      rooms.push(end + 10);
    } else {
      let i = -1;
      while (rooms[i + 1] <= start) {
        i++;
      }
      rooms[i] = end + 10;
      rooms.sort((a, b) => a - b);
    }
  }

  return rooms.length;
}