function factorial(n: number): number {
  if (n === 1) return n

  return n * factorial(n - 1)
}

function collectOddNumbers(arr: number[]): number[] {
  const oddNumbers: number[] = []

  function tryCollect(nums: number[]) {
    if (!nums.length) return

    if (nums[0] % 2 === 0) {
      oddNumbers.push(nums[0])
    }

    tryCollect(nums.slice(1))
  }

  tryCollect(arr)

  return oddNumbers
}

// console.log(factorial(5))
// console.log(collectOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]))

const cache: any = {}
function memo(fn: Function): Function {
  return function(...args: number[]) {
    const [ key ] = args
    
    if (!(key in cache)) {
      const result = fn(...args)
      
      cache[key] = result
    }

    return cache[key]
  }
}


// console.log('FIB (1): ', fib(10, {}))
// console.log('FIB (2): ', countFibonacci(20))
// console.log('FIB (2): ', countFibonacci(10))
// console.log('FIB (2): ', countFibonacci(10))
// console.log('FIB (2): ', countFibonacci(40))
// console.log('FIB (2) of 50: ', countFibonacci(100)) 

// const promise = new Promise(resolve => {
//   resolve('Promise resolve')
// })

// promise.then(res => console.log(res))
// setTimeout(() => {
//   console.log('Set Timeout')
// }, 0)

function power(n: number, end: number): number {
  if (end < 1) return 1
  return power(n, end - 1) + power(n, end - 1)
}

// console.log(power(2, 4))

function fact(n: number, sum: number = 1): number {
  if (n === 1) return sum

  console.log('S: ', sum)
  return fact(n - 1, sum * n)
}

// console.log(fact(7))

function productOfArray(arr: number[], sum: number = 1): number {
  if (!arr.length) return sum

  return productOfArray(arr.slice(1), arr[0] * sum)
}

function recursiveRange(n: number): number {
  console.log(n)
  if (n < 1) return n

  return n + recursiveRange(n - 1)
}

let data = [1, 2, 3, 10]
// console.log(data.slice(1))
// console.log(data)
// console.log(productOfArray(data))
// console.log(1 + 2 + 3 + 4 + 5 + 6)
// console.log(recursiveRange(10))

/**
 * How it works: 
 * 
 *  fib(5) is equal 8 => [1, 1, 2, 3, 5, 8]
 * 
 *                5
 *              /   \
 *             4     3
 *           /   \
 *         3      2
 *        /  \   /  \
 *       2    1 1    1
 *      / \
 *     1  1
 * 
 * 
 * @param n 
 * @param cached 
 * @returns 
 */
function fib(n: number, cached: any = {}){
  // add whatever parameters you deem necessary - good luck!
  if (n in cached) return cached[n]
  if (n < 3) return 1
  
  cached[n] = fib(n - 1, cached) + fib(n - 2, cached)
  
  return cached[n]
}

// console.log(fib(100))

function reverse(str: string, index: number = 0): string {
  if (index > Math.floor(str.length / 2)) return str
  
  const arr = str.split(''),
        arrLen = arr.length - index - 1
  
  arr[index] = arr.splice(arrLen, 1, arr[index])[0]
  
  return reverse(arr.join(''), index + 1)
}

// console.log(reverse('abcd'))
// console.log(reverse('awesome')) // => emosewa
// console.log(reverse('rithmschool')) // => loohcsmhtir

function isPalindrome(str: string, index: number = 0): boolean {
  if (index > Math.floor(str.length / 2)) return true
  if (str[index] !== str[str.length - 1 - index]) return false
  
  return isPalindrome(str.substring(index, str.length - index), index + 1)
}

// console.log('abcd'.substring(2, 2))
// console.log(isPalindrome('abbc'))

const isOdd = (val: number): boolean => val % 2 !== 0

function someRecursive(arr: number[], callback: Function): boolean {
  if (!arr.length) return false
  
  let status = callback(arr.pop(), callback)
  
  return status ? true : someRecursive(arr, callback)
}
// console.log(someRecursive([1, 2, 3, 4], isOdd)) // => true
// console.log(someRecursive([4, 6, 8], isOdd)) // => false
// console.log(someRecursive([4, 6, 8, 9], isOdd)) // => true

/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * 
 * @param nums 
 */
function flatten(nums: any, index: number = 0): number[] | number[][] {
  if (!nums[index]) return nums
  
  if (typeof nums[index] === 'object') 
    nums.splice(index, 1, ...nums[index])
  else
    index += 1
  
    return flatten(nums, index)
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([
//   1, 
//   [
//     2, 
//     [3, 4], 
//     [
//       [5]
//     ]
//   ]
// ])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3

/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 * 
 * @param strs 
 * @param index 
 * @returns 
 */
function capitalizeFirst(strs: string[], index: number = 0): string[] {
  if (index >= strs.length) return strs
  
  let firstChar = strs[index][0][0].toUpperCase()
  strs[index] = [firstChar, strs[index].substring(1, strs[index].length)].join('')

  return capitalizeFirst(strs, index + 1)
}

// console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']


/**
 * nestedEvenSum
 *
 * Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
 */
interface NestedEventSum {
  [key: string]: number | boolean | string | Object
}

function nestedEvenSum(obj: NestedEventSum, sum: number = 0): number {
  for (let key of  Object.keys(obj)) {
    if (typeof obj[key] === 'number') {
      const num = obj[key] as number 
      sum += num % 2 === 0 ? num : 0
    } else if (typeof obj[key] === 'object') {
      sum = nestedEvenSum(obj[key] as NestedEventSum, sum)
    }
  }

  return sum
}


const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

const obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log('Output: ', nestedEvenSum(obj1)) // 6
console.log('Output: ', nestedEvenSum(obj2)) // 10

/**
 * Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
 *
 * @param arr 
 * @param index 
 */
function capitalizedWords(arr: string[], index: number = 0): string[] {
  if (index >= arr.length) return arr

  arr[index] = arr[index].toUpperCase()

  return capitalizedWords(arr, index + 1)
}

// let words = ['i', 'am', 'learning', 'recursion']
// console.log(capitalizedWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']

/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values 
 * which are numbers and converts them to strings. Recursion would be a great way to solve this!
 * 
 * @param obj 
 * @param str 
 * @returns 
 */
function stringifyNumbers(obj: Record<string, any>, newObj: Record<string, any> = {}): Record<string, any> {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'number') {
      Object.assign(newObj, {
        [key]: String(obj[key])
      })
    } else if (typeof newObj === 'object'){
      if (!(key in newObj)) {
        Object.assign(newObj, {
          [key]: obj[key]
        })
      }

      stringifyNumbers(obj[key], newObj[key])
    }
  }

  return newObj
}

let obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

let obj4 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}
console.log('Output: ', JSON.stringify(stringifyNumbers(obj3), null, 2))
console.log('Output: ', JSON.stringify(stringifyNumbers(obj4), null, 2))

/**
 * Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
 * 
 * @param obj 
 * @param strs 
 */
function collectStrings(obj: Record<string, any>, strs: string[] = []): string[] {
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === 'string') {
      strs.push(obj[key])
    } else {
      collectStrings(obj[key], strs)
    }
  }

  return strs
}

const obj5 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        },
        wheel: {
          level: 'LEVEL 1'
        }
      }
    }
  }
}

console.log('Output: ', collectStrings(obj5))