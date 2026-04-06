//task 1

function temperatureConverter(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;

  return {
    fahrenheit: fahrenheit,
    kelvin: kelvin
  };
}

console.log(temperatureConverter(99));


//task 2

function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);

console.log(double(5));  

//task 3


const isPrime = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

// Example
console.log(isPrime(7));  
console.log(isPrime(777)); 
