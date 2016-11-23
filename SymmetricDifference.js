
function sym(arg) {

    var args = Array.from(arguments);

   var SymmetricDifference = args.reduce(function (arrayA, arrayB) {

        var newArray = [];

        //take filter values of A out (return false) IF they are in array B

        arrayA = arrayA.filter(function (valueInA) {
            // console.log(valueInA);
            // console.log(arrayB.includes(valueInA));

            if (arrayB.includes(valueInA)) {
                //delete every instance of valueInA in arrayB  //alternatively try using .filter to filter out if valueInA return false
                arrayB = arrayB.filter((valueInB) => {
                    if(valueInB === valueInA) return false;
                    else return true;
                });
                // remove from arrayA by returning false to .filter
                return false;
            } else return true;

        });

        return arrayA.concat(arrayB);

    });

    var SymmetricDifferenceCleanedOfDupplicateValues = [];
    SymmetricDifference.forEach((element) => {
        if (!SymmetricDifferenceCleanedOfDupplicateValues.includes(element)) SymmetricDifferenceCleanedOfDupplicateValues.push(element);
    });

    return SymmetricDifferenceCleanedOfDupplicateValues;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));