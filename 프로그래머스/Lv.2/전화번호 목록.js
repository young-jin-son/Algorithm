function solution(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);
  for (let i = 0; i < phone_book.length; i++) {
    const phone = phone_book[i];
    for (let j = i + 1; j < phone_book.length; j++) {
      const next = phone_book[j];
      if (next.slice(0, phone.length) === phone) return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false