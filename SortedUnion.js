
function uniteUnique(arr) {

    var uniqueValuesArray = [];

    var argumentsArray = Array.prototype.slice.call(arguments);
;
    //loop through arrays

    argumentsArray.forEach(function (arrayOfValues) {

        arrayOfValues.forEach(function (inputValue) {

            var addValue = true;

            uniqueValuesArray.every(function (outputValue) {

                if (outputValue === inputValue) {
                    
                    addValue = false;
                    return false;
                    
                } else return true;

            });

            if (addValue === true) uniqueValuesArray.push(inputValue);

        });

    });

    return uniqueValuesArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
