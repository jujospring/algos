type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>,
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {

  }

  insertAt(item: T, index: number): void {
    
  }

  append(item: T): void {
    
  }

  remove(item: T): T | undefined {

  }

  get(index: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }

    return curr?.value;
  }
  
  removeAt(index: number): T | undefined {

  }
}
