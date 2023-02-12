function sort<T>(leftNode: T[], rightNode: T[]) {
  const result = []
  let leftNodeIndex = 0, rightNodeIndex = 0

  while (leftNodeIndex < leftNode.length && rightNodeIndex < rightNode.length) {
    if (leftNode[leftNodeIndex] < rightNode[rightNodeIndex]) {
      result.push(leftNode[leftNodeIndex])
      leftNodeIndex++
    } else {
      result.push(rightNode[rightNodeIndex])
      rightNodeIndex++
    }
  }

  return [...result, ...leftNode.slice(leftNodeIndex), ...rightNode.slice(rightNodeIndex)]
}

function mergeSort<T>(arr: T[]): any {
  if (arr.length === 1) return arr

  const median = Math.floor(arr.length / 2)
  const leftNode = arr.slice(0, median)
  const rightNode = arr.slice(median)

  return sort(
    mergeSort(leftNode),
    mergeSort(rightNode)
  )
}

// console.log(mergeSort([55, 67, 23, 1, 4, 2, 33]))
console.log(mergeSort(['t', 'a', 'm']).join(''))

export default mergeSort

