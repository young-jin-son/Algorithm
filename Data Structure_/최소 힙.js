const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const answer = [];

class Heap {
  constructor() {
    this.min = 0;
    this.arr = [];
  }

  getMin() {
    return this.min;
  }

  push(v) {
    this.arr.push(v);
    console.log(this.arr);
  }
}

const heap = new Heap();

arr.forEach(v => {
  if (v === 0) {
    answer.push(heap.getMin());
  } else {
    heap.push(v);
  }
})

console.log(answer.join('\n'));