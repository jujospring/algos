type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head]; //queue stand in

  while (q.length) {
    //shifting queue
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }

    //search
    if (curr.value === needle) {
      return true;
    }

    //breadth first traversal
    q.push(curr.left);
    q.push(curr.right);

    return false;
  }
}