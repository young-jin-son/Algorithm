// class Node {
//   constructor(i, v) {
//     this.index = i;
//     this.value = v;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = new Node(-1, -1);
//     this.tail = new Node(-1, -1);
//     this.head.next = this.tail;
//     this.head.prev = this.tail;
//     this.tail.next = this.head;
//     this.tail.prev = this.head;
//     this.cur = this.head;
//   }

//   isEmpty() {
//     return this.head.next === this.tail;
//   }

//   setCur() {
//     if (this.cur === this.head || this.cur === this.tail) {
//       this.cur = this.cur.next;
//       return false;
//     }
//     this.cur.value -= 1;
//     if (this.cur.value <= 0) { // 값이 없으면 리스트에서 제거
//       this.cur.prev.next = this.cur.next;
//       this.cur.next.prev = this.cur.prev;
//     }
//     if (this.isEmpty()) return false;
//     this.cur = this.cur.next;
//     while (this.cur === this.head || this.cur === this.tail) {
//       this.cur = this.cur.next;
//     }
//     // this.getValues();
//     // console.log('\n');
//     return true;

//     // console.log('this.cur.value', this.cur.value);
//   }

//   enqueue(i, v) {
//     const newNode = new Node(i, v);
//     newNode.next = this.tail;
//     newNode.prev = this.tail.prev;
//     this.tail.prev.next = newNode;
//     this.tail.prev = newNode;
//   }

//   getValues() {
//     this.cur = this.head;
//     while (this.cur !== this.tail) {
//       console.log(this.cur.value);
//       this.cur = this.cur.next;
//     }
//   }

//   getCurIndex() {
//     return this.cur.index;
//   }
// }

// function solution(food_times, k) {
//   const queue = new Queue();
//   food_times.forEach((time, i) => queue.enqueue(i + 1, time));
//   while (k) {
//     if (queue.isEmpty()) return -1;
//     const isSet = queue.setCur();
//     if (isSet) k--;
//   }
//   return queue.getCurIndex();
// }


function solution(food_times, k) {
  // 4. 종료 조건
  const sum = food_times.reduce((a, b) => a + b, 0);
  if (sum <= k) return -1;

  const n = food_times.length;
  const min = Math.min(...food_times);
  if (min * n < k) { // 1
    k -= min * n;
    food_times = food_times.map(x => x - min);
  } else if (min * n > k) { // 2
    food_times = food_times.map(x => x - Math.floor(k / n));
    k -= Math.floor(k / n) * n;
    if (k === 0) return 1;
  }
  for (let i = 0; k >= 0; i++) {
    if (food_times[i % n] !== 0) {
      food_times[i % n]--;
      k--;
    }
    if (k < 0) return (i % n) + 1;
  }
}

console.log(solution([3, 1, 2], 5));// 1
console.log(solution([5, 2, 3, 1, 4], 7)); // 3
console.log(solution([5, 2, 3, 1, 4], 2)); // 3
console.log(solution([6, 7, 6, 5, 6], 10)); // 1
console.log(solution([6, 7, 6, 5, 6], 11)); // 2