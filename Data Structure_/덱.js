const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...commands] = fs.readFileSync(path).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (!this.head) return -1;

    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return value;
  }

  popBack() {
    if (!this.tail) return -1;

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getFront() {
    return this.head ? this.head.value : -1;
  }

  getBack() {
    return this.tail ? this.tail.value : -1;
  }
}

const deque = new Deque();
const answer = [];
for (let i = 0; i < n; i++) {
  const [c, v] = commands[i].split(' ');

  if (c === 'push_front') {
    deque.pushFront(v);
  } else if (c === 'push_back') {
    deque.pushBack(v);
  } else if (c === 'pop_front') {
    answer.push(deque.popFront());
  } else if (c === 'pop_back') {
    answer.push(deque.popBack());
  } else if (c === 'size') {
    answer.push(deque.getSize());
  } else if (c === 'empty') {
    answer.push(deque.isEmpty());
  } else if (c === 'front') {
    answer.push(deque.getFront());
  } else if (c === 'back') {
    answer.push(deque.getBack());
  }
}

console.log(answer.join('\n'));