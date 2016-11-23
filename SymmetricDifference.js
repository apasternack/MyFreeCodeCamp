
function sym(arg) {

    // console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments[1]);

    var args = Array.from(arguments);

    // console.log(args);
    // console.log(Array.isArray(args));

    // console.log(args[0]);
    // console.log(Array.isArray(args[0]));
    // console.log(args[1]);
    // console.log(Array.isArray(args[1]));

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

    return SymmetricDifference;
}

console.log(sym([5, 2, 1, 4], [1, 2, 3]));


