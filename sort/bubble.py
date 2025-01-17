def bubble_sort(arr): 
  n = len(arr)
  for i in range(n):
    for j in range (n-i-1):
      if arr[j] > arr[j+1]:
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp


if __name__ == "__main__":
  example = [1,4,6,8,54,3,2,5,7,8]

  bubble_sort(example)
  print(example)