function insertionSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    const currentValue = nums[i]
    let j

    for (j = i - 1; j >= 0 && nums[j] > currentValue; j--) {
      nums.splice(j + 1, 1, nums[j])
    }

    nums.splice(j + 1, 1, currentValue)
  }

  return nums
}

console.log('Output: ', insertionSort([3, 10, 99, -4, 34, 5]))
console.log('Output: ', insertionSort([3, 10, 99, -4, 34, 5, -99, 67, 22, 13]))