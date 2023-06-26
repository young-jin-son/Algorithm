const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...commands] = fs.readFileSync(path).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return -1;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return removedNode.value;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getSize() {
    return this.size;
  }

  getFront() {
    return this.head ? this.head.value : -1;
  }

  getBack() {
    return this.tail ? this.tail.value : -1;
  }
}

const queue = new Queue();
const answer = [];

for (let i = 0; i < n; i++) {
  const [c, v] = commands[i].split(' ');

  if (c === 'push') {
    queue.enqueue(Number(v));
  } else if (c === 'pop') {
    answer.push(queue.dequeue());
  } else if (c === 'size') {
    answer.push(queue.getSize());
  } else if (c === 'empty') {
    answer.push(queue.isEmpty());
  } else if (c === 'front') {
    answer.push(queue.getFront());
  } else if (c === 'back') {
    answer.push(queue.getBack());
  }
}

console.log(answer.join('\n'));