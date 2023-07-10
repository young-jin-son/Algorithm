// TODO: 배열로 스택 만들어서 해보기
78
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [str, n, ...commands] = fs.readFileSync(path).toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Editor {
  constructor() {
    this.head = new Node('head');
    this.cursor = null;
  }

  moveLeft() {
    if (this.cursor.prev) {
      this.cursor = this.cursor.prev;
    }
  }

  moveRight() {
    if (this.cursor.next) {
      this.cursor = this.cursor.next;
    }
  }

  deleteLeft() {
    if (this.cursor.prev) {
      const deletedNode = this.cursor;
      if (this.cursor.next) {
        deletedNode.next.prev = deletedNode.prev;
      }
      deletedNode.prev.next = deletedNode.next;
      this.cursor = deletedNode.prev;
    }
  }

  addLeft(value) {
    const newNode = new Node(value);
    if (!this.cursor) { // 비었을 때
      this.head.next = newNode;
      newNode.prev = this.head;
    } else if (!this.cursor.next) { // 커서가 맨 뒤에 있을 때
      newNode.prev = this.cursor;
      this.cursor.next = newNode;
    } else {
      newNode.prev = this.cursor;
      newNode.next = this.cursor.next;
      this.cursor.next.prev = newNode;
      this.cursor.next = newNode;
    }
    this.cursor = newNode;
  }

  toArr() {
    const arr = [];
    let current = this.head.next;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const editor = new Editor();

for (let i = 0; i < str.length; i++) {
  editor.addLeft(str[i]);
}

for (let i = 0; i < n; i++) {
  const [c, v] = commands[i].split(' ');
  switch (c) {
    case 'L':
      editor.moveLeft();
      break;
    case 'D':
      editor.moveRight();
      break;
    case 'B':
      editor.deleteLeft();
      break;
    case 'P':
      editor.addLeft(v);
      break;
  }
}

console.log(editor.toArr().join(''));