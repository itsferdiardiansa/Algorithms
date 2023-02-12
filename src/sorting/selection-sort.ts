function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let key = i

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[key] > nums[j]) {
        key = j
      }
    }

    nums[i] = nums.splice(key, 1, nums[i])[0]
  }

  console.log(nums)
}

// selectionSort([4, 80, 5, 2, 8, 3, 3, 1, 9])

// [-4,-1,0,3,10]
// [-4, -1] 
// [0, 3, 10]

// 10 > -4 => 10 = 100
// 3 > -4 => -4 = 16
// 3 > -1 => 3 = 9
// 0 > -1 => -1 = 1

// [-5,-3,-2,-1]
// [-5, -3]
// [-2, -1]

// -1 > -5 => -5 = 25
// -2 > -3 => -3 = 9

function sortedSquares(nums: number[]) {
  const sortedNumbers: number[] = []
  let leftIndex = 0
  let rightIndex = nums.length - 1

  while (leftIndex !== rightIndex) {
    const leftValue = Math.abs(nums[leftIndex]) ** 2
    const rightValue = Math.abs(nums[rightIndex]) ** 2

    console.log('S')
    if (leftValue > rightValue) {
      sortedNumbers.unshift(leftValue)
      leftIndex++
    } else {
      sortedNumbers.unshift(rightValue)
      rightIndex--
    }
  }

  sortedNumbers.unshift(Math.abs(nums[rightIndex])**2)
  console.log(sortedNumbers, leftIndex, rightIndex)

  return sortedNumbers
}

// sortedSquares([-5,-3,-2,-1, 0])
// sortedSquares([-4, -1, 0, 3, 10])

function birthday(s: number[], d: number, m: number): number {
  let count = 0
  
  for (let i = 0; i <= s.length - m; i++) {
    let temp = 0 
    
    for (let j = i; j < i + m; j++) {
      temp += s[j]
    }
    
    if (temp === d) {
      count++
    }
  }
  
  return count
}

birthday([2, 2, 1, 3, 2], 4, 2)
birthday([4], 4, 1)
birthday([1, 1, 1, 1, 1, 1], 3, 2)