def getMinimumCost(arr): 
  cost, max_diff, idx1, idx2 = 0, 0, 0, 0
  for i in range(len(arr) - 1) :
    first = arr[i]
    second = arr[i + 1]

    if abs(second - first) > max_diff:
      max_diff = abs(second - first)
      idx1 = i
      idx2 = i + 1
  
  middle = (arr[idx1] + arr[idx2]) // 2

  cost = cost + ((arr[idx1] - middle) * (arr[idx1] - middle)) + ((arr[idx2] - middle) * (arr[idx2] - middle))
  
  for i in range(len(arr) - 1):
    #skip (idx2 - idx1)^2 because we already did that manually with the newly inserted number right before this
    if i == idx1:
      continue

    first = arr[i]
    second = arr[i + 1]

    cost = cost + ((first - second) * (first - second))

  return cost


if __name__ == "__main__":
  arr = [1, 3, 5, 2, 10]

  ans = getMinimumCost(arr)

  print(ans)
    