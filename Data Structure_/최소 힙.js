const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...arr] = fs.readFileSync(path).toString().trim().split(/\s/g).map(Number);

const answer = [];

class Node {
  constructor(v) {
    this.value = v;
    this.prev = null;
    this.next = null;
  }
}

class Heap {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(v) {
    const newNode = new Node(v);

    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (v > cur.value) {

      }
    }

  }

  getMin() {
    if (!this.head) {
      return 0;
    }

    const min = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return min;
  }
}

console.log(answer.join('\n'));