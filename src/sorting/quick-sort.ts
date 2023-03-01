/**
 * Time complexity: O(n log n)
 * 
 * @param nums 
 * @returns 
 */
function quickSort(nums: number[], startIndex: number = 0, endIndex: number = nums.length - 1): number {
  let storeIndex = startIndex + 1
  
  console.log('Nums: ', startIndex, endIndex)
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (nums[i] < nums[startIndex]) {
      // console.log('Loop (' + i + '): ', nums[i], nums[startIndex])
      nums[i] = nums.splice(storeIndex, 1, nums[i])[0]
      storeIndex++
    }
  }


  nums[startIndex] = nums.splice(storeIndex - 1, 1, nums[startIndex])[0]

  // console.log('Store index: ', storeIndex - 1)
  return storeIndex - 1
} 

function sort(nums: number[], leftIndex: number = 0, rightIndex: number = nums.length - 1): number[] {
  if (leftIndex < rightIndex) {
    const pivotIndex = quickSort(nums, leftIndex, rightIndex)

    // console.log('Pivot Index: ', pivotIndex)
    // Left array
    sort(nums, leftIndex, pivotIndex - 1)
    
    // Right array
    sort(nums, pivotIndex + 1, rightIndex)
  }

  return nums
}

/**
 * Time complecxisty: O(8 log 3) 
 * Array length: 8
 * 
 */
console.log('Output: ', sort([33, -9, -16, 3, -2, 8, 67, 100, 8]))