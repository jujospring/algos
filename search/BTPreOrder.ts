type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  //pre
  path.push(curr.value);

  //recurse: keep walking until we reach empty node then walk back up stack
  walk(curr.left, path);
  walk(curr.right, path);

  //post
  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}