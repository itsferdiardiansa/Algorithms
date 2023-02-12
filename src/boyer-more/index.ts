console.log('=================================')
console.log('           BOYER MORE            ')
console.log('=================================')
console.log('                                 ')
console.log('                                 ')

interface WordMap {
  [key: string]: number
}

/**
 * 
 * Collect given string pattern into the map
 * 
 * Time complexity O(n)
 * 
 * @param str 
 * @returns 
 */
function getMapPattern(str: string) {
  const map: WordMap = {}

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = Math.max(1, str.length - i - 1)
  }

  return map
}

/**
 * Find substring in the string
 * 
 * Time complexity O(m*n)
 * 
 * @param str 
 * @param pattern 
 * @returns 
 */
function findSubstring(str: string, pattern: string) {
  const mapPattern = getMapPattern(pattern)
  const length = pattern.length - 1

  for (let i = 0, step = 0; i < str.length; i++) {
    let j
    for (j = length; j >= 0; j--) {
      if (str[i + j] !== pattern[j]) {
        console.log(step, j, i, str[i + j], mapPattern[str[i + j]])
        i += mapPattern[str[i + j]] || length
        break
      } else {
        console.log('IN: ', str[i + j], pattern[j], 'STOP AT: ', j)
      }
    }

    console.log('             ')
    console.log('=============')
    console.log('             ')
    if (j <= 0) return true
  }

  return false
}

// console.log(findSubstring('1234   bnbh test    ', 'test'))
// console.log(findSubstring('m ake them suffer     band', 'lake them suffer'))

console.log(Math.floor(Math.random() * 10000))

// type UserType = { 
//   name: string
//   age: number 
// }
// type P = keyof UserType

// let number: P = 'age'

// type Arrayish = { 
//   [n: number]: unknown 
// };
// type A = keyof Arrayish;

// let productSize: A = 2000
// productSize = 6000

// const cache: string[] = []

// cache.push('login')

type Status = ['ALLOWED', 'PENDING', 'NOT_ALLOWED']
type UserStatus = Status[number]