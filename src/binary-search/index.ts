function binarySearch(nums: number[], target: number): number {
  let leftIndex = 0, 
      rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((rightIndex + leftIndex) / 2)

    if (nums[mid] > target) {
      rightIndex = mid - 1
    } else if (nums[mid] < target) {
      leftIndex = mid + 1
    } else {
      return mid
    }
  }

  return - 1
}

function recursiveBinarySearch(nums: number[], target: number, leftIndex: number = 0, rightIndex: number = -1): number {
  if (!~rightIndex) rightIndex = nums.length - 1
  
  if (leftIndex > rightIndex) return -1

  const mid = Math.floor((rightIndex + leftIndex) / 2)
  if (nums[mid] > target) {
    return recursiveBinarySearch(nums, target, leftIndex, mid - 1)
  } else if (nums[mid] < target) {
    return recursiveBinarySearch(nums, target, mid + 1, rightIndex)
  } else {
    return mid
  }
}

// console.log('Output: ', recursiveBinarySearch([1, 3, 6, 11, 22, 28, 67, 88, 102, 134], 134))
// console.log('Output: ', binarySearch([1, 3, 6, 11, 22, 28, 67, 88, 102, 134], 3))
// console.log('Output: ', binarySearch([1, 3, 6, 11, 22, 28, 67, 88, 102, 134], 6))
// console.log('Output: ', binarySearch([1, 3, 6, 11, 22, 28, 67, 88, 102, 134], 102))
// console.log([1, 2, 3, 4, 5, 6].slice(0, 3))

console.log('Output: ', binarySearch([1,2,3,4,5],2)) // 1
console.log('Output: ', binarySearch([1,2,3,4,5],3)) // 2
console.log('Output: ', binarySearch([1,2,3,4,5],5)) // 4
console.log('Output: ', binarySearch([1,2,3,4,5],6)) // -1
console.log('Output: ', binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log('Output: ', binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log('Output: ', binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1