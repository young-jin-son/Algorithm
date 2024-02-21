function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    const phone = phone_book[i];
    const next = phone_book[i + 1];
    if (next.indexOf(phone) === 0) return false;
  }
  return true;
  // return !phone_book.sort().some((value, index, self) => self[index + 1]?.indexOf(value) === 0);
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88", "1234"])); // false