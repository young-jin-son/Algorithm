const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");
const n = +input.shift();
const commands = input.map(el => el.split(' '));

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item)
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.empty() == 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    return (this.length) ? 0 : 1;
  }

  front() {
    return this.empty() == 1 ? -1 : this.head.item;
  }

  back() {
    return (this.empty() == 1) ? -1 : this.tail.item;
  }
}

let answer = [];
let queue = new Queue();
commands.forEach(command => {
  switch (command[0]) {
    case 'push':
      queue.push(command[1]);
      break;
    case 'pop':
      answer.push(queue.pop());
      break;
    case 'size':
      answer.push(queue.size());
      break;
    case 'empty':
      answer.push(queue.empty());
      break;
    case 'front':
      answer.push(queue.front());
      break;
    case 'back':
      answer.push(queue.back());
      break;
  }
});

console.log(answer.join('\n'));