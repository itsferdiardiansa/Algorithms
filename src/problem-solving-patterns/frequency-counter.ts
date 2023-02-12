import mergeSort from './../sorting/merge-sort'

/**
 * Write a function called same, which accepts two arrays,
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 * 
 * Time Complexity: O(n^2)
 */

function same<T>(arr1: T[], arr2: T[]) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if ((arr1[i] as number ** 2) === arr2[j]) {
        arr2.splice(j, 1)
        break
      }
    }
  }

  return !Boolean(arr2.length)
}

// console.log(same([1, 2, 3], [4, 1, 9]))
// console.log(same([1, 2, 4], [1, 9]))
// console.log(same([1, 2, 1], [4, 4, 1]))

/**
 * Given two strings, write function to determine if the second
 * second string is an anagram of the first. An anagram is word, phrase or name
 * formed by rearranging the letters of another such as "cinema" formed from "iceman"
 * 
 * Time Complexity: O(n^2)
 */
interface Collections {
  [key: string]: number
}

function validAnagram(str1: string, str2: string) {
  const arr1 = str1.split('')
  const arr2 = str2.split('')
  const collections: Collections = {}
  let length = str1.length

  if (str1.length !== str2.length) return false

  // Method 1
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     console.log(arr2[j])
  //     if (arr1[i] === arr2[j]) {
  //       arr2.splice(j, 1)
  //       break
  //     }
  //   }
  // }
  
  // Method 2
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in collections) {
      collections[str2[i]] += 1
    } else {
      collections[str2[i]] = 1
    }
  }

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in collections) {
      if (collections[str1[i]]) {
        collections[str1[i]] -= 1
        length--
      }
    }
  }

  // return !Boolean(arr2.length)
  return !Boolean(length)
}