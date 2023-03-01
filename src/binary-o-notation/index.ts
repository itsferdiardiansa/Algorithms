/**
 * O(log n) => O(log 3)
 * Array length: 6
 */
function logN(nums: number[]) {
  const arr: number[] = []
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    arr.push(nums[i])
  }

  return arr
}

/**
 * O(n)
 */
function n(nums: number[]): number[] {
  const arr: number[] = []

  for (let i =0; i < nums.length; i++) {
    arr.push(nums[i])
  }

  return arr
}

/**
 * O(n log n) => O(6 + log 3)
 * Array length: 6
 */
function nLogN(nums: number[]): Array<string | number> {
  const arr: Array<string | number> = []

  for (let i = 0; i < nums.length; i++) {
    const mid = Math.floor((nums.length - i - 1) / 2)
    arr.push(nums[i])

    for (let j = 0; j < mid; j++) {
      arr.push('*')
    }
  }

  return arr
}

/**
 * O(n^2) => O(6^2) => O(36)
 * Array length is 6
 */
function nExponential2(nums: number[]): number[] {
  const arr: number[] = []
  let number = 0

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      arr.push(++number)
    }
  }

  return arr
}

/**
 * (2^n)
 * Array length: 6
 */
function twoExponentialN(nums: number[]): number[] {
  const arr: number[] = []
  let number = 0

  return arr
}

const nums = [1, 2, 3, 4, 5, 6]

console.log('O(log n): ', logN(nums))
console.log('O(n): ', n(nums))
console.log('O(n log n): ', nLogN(nums))
console.log('O(n^2): ', nExponential2(nums))

console.log(2 * 2 * 2 * 2 * 2 * 2)
