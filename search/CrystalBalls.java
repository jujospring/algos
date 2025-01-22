public class CrystalBalls {
  public static void main(String[] args) {

    boolean[] breaks = new boolean[10];  //array of 10, false by default
    breaks[7] = true;
    breaks[8] = true;
    breaks[9] = true;

    int ans = two_crystal_balls(breaks);

    System.out.println("Optimum breaking floor: " + ans);

  }

  public static int two_crystal_balls(boolean[] breaks) {
    double jumpAmount = Math.floor(Math.sqrt(breaks.length));

    int i = (int)jumpAmount;

    for (; i < breaks.length; i+=jumpAmount) {
      if (breaks[i]) {
        break;
      }
    }

    i -= (int)jumpAmount;

    for (int j = 0; j < jumpAmount && i < breaks.length; j++) {
      if (breaks[i]) {
        return i;
      }
      i++;
    }

    return -1;
  }
}
