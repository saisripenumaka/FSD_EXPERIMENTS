// Factorial
function factorial(n) {
  if (n < 0) return null;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

// Fibonacci series up to n
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; ; i++) {
    let next = fib[i - 1] + fib[i - 2];
    if (next > n) break;
    fib.push(next);
  }
  return fib.filter(x => x <= n);
}

// Check prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}

// Primes up to n
function primesUpTo(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) if (isPrime(i)) primes.push(i);
  return primes;
}

// Palindrome check
function isPalindrome(num) {
  let s = num.toString();
  return s === s.split('').reverse().join('');
}
