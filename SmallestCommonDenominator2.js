function smallestCommons(arr) {

    var topOfRange;
    var bottomOfRange;
    var currentLowestMultiple;
    var isMultipleOfAllValues = false;
    var rangeOfNumbersArray = [];
    var primeFactorsArray;


    if (arr[0] > arr[1]) {
        topOfRange = arr[0];
        bottomOfRange = arr[1];
    } else {
        topOfRange = arr[1];
        bottomOfRange = arr[0];
    }

    for (var i = bottomOfRange; i <= topOfRange; i++) {

        rangeOfNumbersArray.push(i);

    }
    console.log('range of numbers array: ' + rangeOfNumbersArray);



    primeFactorsArray = primeGenerator(topOfRange / 2);
    // console.log('array length: ' + primeFactorsArray.length);

    var primeFactorObject = {};
    primeFactorsArray.forEach(function (primeFactor) {
        primeFactorObject[primeFactor] = 0;
    });

    console.log(primeFactorObject);

    // given a number, factor it with prime array and create primeFactorObject, put in an array

    function factor(numberToFactor) {

        for (var i = primeFactorsArray.length - 1; i >= 0; i--) {

            if (primeFactorsArray[i] < numberToFactor) {

                if (numberToFactor % primeFactorsArray[i] === 0) {

                    primeFactorObject[primeFactorsArray[i]]++;

                    if (primeFactorsArray.includes(numberToFactor / primeFactorsArray[i])) {

                        primeFactorObject[numberToFactor / primeFactorsArray[i]]++;

                    } else {

                        var newPrimeFactorObject = factor(numberToFactor / primeFactorsArray[i]);

                    }
                    //add both primeFactorsArray[i] to OBJ and result, both with value
                }


            }

        }

        return primeFactorObject;

    }

}


console.log(smallestCommons([1, 10]));


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

        if (isPrime) primeArray.push(currentPrimeValue);

    }

    return primeArray;

}
