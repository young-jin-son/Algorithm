class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  delete(node) {
    if (node === this.head) {
      this.head = node.next;
      if (this.head) this.head.prev = null;
      if (node === this.tail) this.tail = null;
    } else if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) this.tail.next = null;
      if (node === this.head) this.head = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    this.size--;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const str = new LinkedList([...input[0]]);
const n = +input[1];
const commands = input.slice(2).map(el => el.split(' '));

let cursor = str.size - 1;

for (let i = 0; i < n; i++) {
  const command = commands[i][0];
  if (command === 'L') {
    if (cursor > -1) cursor--;
  } else if (command === 'D') {
    if (cursor < str.size - 1) cursor++;
  } else if (command === 'B') {
    if (cursor > -1) {
      const nodeToDelete = str.head;
      for (let j = 0; j < cursor; j++) {
        nodeToDelete = nodeToDelete.next;
      }
      str.delete(nodeToDelete);
      cursor--;
    }
  } else if (command === 'P') {
    const newNode = new Node(commands[i][1]);
    if (cursor === -1) {
      str.head.prev = newNode;
      newNode.next = str.head;
      str.head = newNode;
    } else if (cursor === str.size - 1) {
      str.tail.next = newNode;
      newNode.prev = str.tail;
      str.tail = newNode;
    } else {
      let nodeToAddAfter = str.head;
      for (let j = 0; j < cursor; j++) {
        nodeToAddAfter = nodeToAddAfter.next;
      }
      newNode.prev = nodeToAddAfter;
      newNode.next = nodeToAddAfter.next;
      nodeToAddAfter.next.prev = newNode;
      nodeToAddAfter.next = newNode;
    }
    cursor++;
    str.size++;
  }
}

console.log(str.toArray().join(''));




// const fs = require('fs');
// const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
// const input = fs.readFileSync(path).toString().trim().split('\n');
// const str = [...input[0]];
// const n = +input[1];
// const commands = input.slice(2).map(el => el.split(' '));

// let cursor = str.length - 1;

// for (let i = 0; i < n; i++) {
//   const command = commands[i][0];
//   if (command === 'L') {
//     if (cursor > -1) cursor--;
//   } else if (command === 'D') {
//     if (cursor < str.length - 1) cursor++;
//   } else if (command === 'B') {
//     if (cursor > -1) {
//       str.splice(cursor, 1);
//       cursor--;
//     }
//   } else if (command === 'P') {
//     str.splice(cursor + 1, 0, commands[i][1]);
//     cursor++;
//   }
// }

// console.log(str.join(''));