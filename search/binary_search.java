import java.util.Arrays;
import java.util.Scanner;

public class binary_search {
  public static void main(String[] args) {
    int n;
    int key;
    try (Scanner sc = new Scanner(System.in)) {
      System.out.println("Enter key: ");
      key = sc.nextInt();
      System.out.println("Enter array size: ");
      n = sc.nextInt();

      int[] int_array = new int[n];
      System.out.println("Enter elements of array: ");
      for (int i = 0; i < n; i++) {
        int_array[i] = sc.nextInt();
      }

      //sort it
      Arrays.sort(int_array);
      int first = 0;
      int last = int_array.length;

      int ans = binary(int_array, first, last, key);

      if (ans == -1) {
        System.out.println("Key was not in given array");
      } else {
        System.out.println("Key: " + ans);
      }
    }
  }

  private static int binary(int[] arr, int first, int last, int key) {
      while (first < last) {
        int mid = first + (last - first)/2;
        int guess = arr[mid];

        if (guess == key) {
          return guess;
        } else if (guess < key) {
          first = mid + 1;
        } else {
          last = mid;
        }
      }

      return -1;
  }
}
