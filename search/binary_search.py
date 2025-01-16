import sys


def binary_search(arr, key):
  low = 0
  high = len(arr)

  while(low < high): 
    mid = low + (high - low)//2
    guess = arr[mid]

    if guess == key:
      return guess
    elif guess < key:
      low = mid + 1
    else:
      high = mid

  return -1
  
    

if __name__ == "__main__":
  key_input = input("Enter the key: ")
  key = int(key_input)

  input_str = input("Enter the elements of the array separated by spaces: ")
  str_array = input_str.split()

  #strings to ints 
  num_array = [int(num) for num in str_array]

  num_array.sort()

  answer = binary_search(num_array, key)

  if answer == -1:
    print("key not found")
  else:  
    print("key found: ", answer)
  exit(0)
    