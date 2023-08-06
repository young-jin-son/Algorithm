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
  }

  push(v) {
    const newNode = new Node(v);

    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (v > cur.value || cur.next) {
        cur = cur.next;
      }
      if (cur === this.head) {
        this.head = newNode;
      }
      if (cur.prev) {
        newNode.prev = cur.prev;
        cur.prev.next = newNode;
      }
      cur.prev = newNode;
      newNode.next = cur;

      // console.log(newNode);
    }
  }

  getMin() {
    if (!this.head) {
      return 0;
    }

    const min = this.head.value;
    // console.log('>>>POP\n', this.head, this.head.next);
    this.head = this.head.next;
    // this.head.prev = null;
    return min;
  }
}

const heap = new Heap();

for (const v of arr) {
  if (v === 0) {
    answer.push(heap.getMin());
  } else {
    heap.push(+v);
  }
}
console.log(answer.join('\n'));