function memo(fn: Function): any {
  let cache: any = {}

  return function () {
    const args = Array.prototype.slice.call(arguments),
          key = JSON.stringify(args)
    
    if (!(key in cache)) {
      cache[key] = fn(...args)
    }
    
    return cache[key]
  }
}

function fibonacci(n: number) {
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

const fib = memo(fibonacci)

// console.log('Fibonacci of 5 is:', fib(5))
// console.log('Fibonacci of 8 is:', fib(8))
// console.log('Fibonacci of 30 is:', fib(30))
console.log('Fibonacci of 50 is:', fib(50))