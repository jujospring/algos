function qs(arr: number[], lo: number, hi: number): void {
  //base case:
  if (lo >= hi) {
    return;
  }

  const pivotIndex = partition(arr, lo, hi);

  //first side
  qs(arr, lo, pivotIndex - 1)
  //next side
  qs(arr, pivotIndex + 1, hi)

}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let index = lo - 1;

  //find a value lower than the pivot if possible and switch the lo value with it
  for ( let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      index++;
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }

  //increment index to positiion after lo value and switch the value there with the pivot
  index++;
  arr[hi] = arr[index];
  arr[index] = pivot;

  return index;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
  console.log(arr);
}

quick_sort([9,3,7,4,69,420,42]);
