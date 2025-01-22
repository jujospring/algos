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

  //recurse: keep walking left and right until we cannot walk left or right
  walk(curr.left, path);
  walk(curr.right, path);

  //post: push in the value
  path.push(curr.value);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}