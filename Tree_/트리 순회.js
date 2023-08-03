const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './test.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

let result = '';

const tree = {};
for (let i = 0; i < n; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

const preOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  result += node;
  preOrder(left);
  preOrder(right);
}

const inOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  result += node;
  inOrder(right);
}

const postOrder = (node) => {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);