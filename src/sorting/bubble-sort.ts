function bubbleSort<T>(arr: T[]) {
  for(let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr.splice(j + 1, 1, arr[j])[0]
      }
    }
  }
  console.log(arr)

  return arr
}

bubbleSort<number>([4, 6, 8, 1, 44, 3])