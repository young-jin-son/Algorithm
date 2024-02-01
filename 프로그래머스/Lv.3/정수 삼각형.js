class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
  }
}

function arrayToBinaryTree(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  // 첫 번째 배열 요소로 루트 노드를 생성합니다.
  let root = new TreeNode(arr[0][0]);
  let queue = [root];

  for (let i = 1; i < arr.length; i++) {
    let level = arr[i];
    let levelNodes = [];

    for (let j = 0; j < level.length; j++) {
      let currentNode = new TreeNode(level[j]);
      levelNodes.push(currentNode);

      // 이전 레벨의 노드와 연결합니다.
      let parent = queue[0];
      if (j > 0) {
        parent.right = currentNode;
      } else {
        parent.left = currentNode;
      }
    }

    // 현재 레벨의 노드를 큐에 추가합니다.
    queue = queue.concat(levelNodes);
    // 이전 레벨의 노드를 큐에서 제거합니다.
    queue = queue.slice(level.length);
  }

  return root;
}

function solution(triangle) {

  let answer = 0;
  return answer;
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));