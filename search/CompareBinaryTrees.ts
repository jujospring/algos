type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  //both parts of the tree/subtree have ended and everything has been the same so far
  if (a === null && b === null) {
    return true;
  }
  //one side of the tree ends while the other keeps going
  if (a === null || b === null) {
    return false;
  }
  //difference in node values but nodes still exist
  if (a.value !== b.value) {
    return false;
  }

  //recursively checking both branches of each node and if there are any differences the trees will not be the same
  return compare(a.left, b.left) && compare(a.right, b.right)
}
