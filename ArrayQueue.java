import java.util.NoSuchElementException;

class ArrayQueue {

  // public static void main(String[] args) {
  //   ArrayQueue a = new ArrayQueue(3);

  //   a.enqueue(8);
  //   a.enqueue(4);
  //   a.enqueue(4);
  //   // a.dequeue();

  //   int debug = a.peek();

  //   System.out.println(Integer.toString(debug));
  // }

  private int first;
  private int last;
  private int[] nums;

  public ArrayQueue(int initSize) {
    this.first = -1;
    this.last = -1;
    this.nums = new int[initSize];
  }

  public void enqueue(int x) {
    if (isFull()) {
      throw new IllegalStateException();
    }
    if (isEmpty()) {
      first++;
    }
    nums[++last] = x;
  }

  public int dequeue() {
    if (isEmpty()) {
      throw new NoSuchElementException();
    }
    int temp = nums[first];
    if (first == last) {
      first = last = -1;
    } else {
      first++;
    }
    return temp;
  }

  public int peek() {
    if (!isEmpty()) {
      return nums[first];
    }
    throw new NoSuchElementException();
  }

  public boolean isEmpty() {
    return first == -1;
  }

  public boolean isFull() {
    return last == nums.length-1;
  }

}
