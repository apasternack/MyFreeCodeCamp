
function sumPrimes(num) {

    //Sum all the prime numbers up to and including the provided number.

    // 1) generate primes
    var sumPrimeArray;
    var primeArray = primeGenerator(num);

    // 2) sum primes
    sumPrimeArray = primeArray.reduce(function(total, num) {return total + num;});



    return sumPrimeArray;
}

function primeGenerator(num) {

    var primeArray = [];
    var primePointer = 0;

    for (var currentPrimeValue = 2; currentPrimeValue <= num; currentPrimeValue++) {

        var isPrime = true;
        var divisorCount = 0;

        for (var divisor = currentPrimeValue; divisor > 0; divisor--) {

            if (currentPrimeValue % divisor === 0) divisorCount++;
            if (divisorCount > 2) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) primeArray.push(currentPrimeValue);

    }

    return primeArray;

}

console.log(sumPrimes(977));