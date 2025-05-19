import java.util.EmptyStackException;

class ArrayStack {

  // public static void main(String[] args) {
  //   ArrayStack a = new ArrayStack(8);

  //   a.push(8);
  //   a.push(4);
  //   a.pop();

  //   int debug = a.peek();

  //   System.out.println(Integer.toString(debug));
  // }

  private int size;
  private int[] nums;
  private int top;

  public ArrayStack(int initSize) {
    this.size = 0;
    this.nums = new int[initSize];
    this.top = -1;
  }

  public void push(int x) {
    if(full()) {
      resize();
    } 

    nums[++top] = x;
    size++;
  }

  public int pop() {
    if (!empty()) {
      int temp = peek();
      top--;
      size--;
      return temp;
    }
    throw new EmptyStackException();
  }

  public int peek() {
    if (!empty()) {
      return nums[top];
    }
    return -1;
  }

  public boolean empty() {
    return top < 0;
  }

  public boolean full() {
    return size == nums.length;
  }

  @SuppressWarnings("ManualArrayToCollectionCopy")
  public void resize() {
    int newSize = nums.length * 2;
    int[] newArray = new int[newSize];
    for (int i = 0; i < nums.length; i++) {
      newArray[i] = nums[i];
    }
    nums = newArray;
  }
}

