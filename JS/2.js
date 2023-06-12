// Write a program that checks a no.s if it is prime or not using a while loop

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    let divisor = 2;
    while (divisor < number) {
      if (number % divisor === 0) {
        return false;
      }
      divisor++;
    }
  
    return true;
  }
  
  const numberToCheck = 16;
  if (isPrime(numberToCheck)) {
    console.log(numberToCheck + ' is a prime number.');
  } else {
    console.log(numberToCheck + ' is not a prime number.');
  }
  