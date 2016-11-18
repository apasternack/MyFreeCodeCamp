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
    

    // given a number, factor it with prime array and create primeFactorObject, put in an array

    function factor(numberToFactor) {

        var primeFactorObject = {};

        primeFactorsArray = primeGenerator(topOfRange/2);
        // console.log('array length: ' + primeFactorsArray.length);

        for ( var i = primeFactorsArray.length-1; i >= 0; i--) {

            if (primeFactorsArray[i] < numberToFactor) {
                //divide number
                //store result.floor in factorObject
                primeFactorObject[primeFactorsArray[i]] = Math.floor(numberToFactor / primeFactorsArray[i]);

               //set numberToFactor to remainder
               numberToFactor = numberToFactor % primeFactorsArray[i];

            }

        }

        return primeFactorObject;

    }

    console.log(factor(16));


//     var myObj = {
//         3:4,
//         5:1,
//         7:3
//     };

// console.log(myObj[3]);


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

        if(isPrime) primeArray.push(currentPrimeValue);

    }

    return primeArray;

}
