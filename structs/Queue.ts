type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;
    if (!this.tail) {
      this.tail = this.tail = node; //if no node tail and head are set to the newly added node
    }
    

    this.tail.next = node; //pointing previous tail to new tail (it's no longer the last node)
    this.tail = node; //pointing the tail to the newly added node (tail now points to the correct node)
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined; //freeing space for fun

    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
