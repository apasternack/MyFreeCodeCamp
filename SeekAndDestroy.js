
function destroyer(arr) {
    //constructs a real array from arguments object
    var args = Array.prototype.slice.call(arguments);

    //constructs an array of the number set to be filtered
    var arrayOfNumbers = arguments[0];

    //create an array with values to be removed
    var valuesToRemove = args.splice(1, (args.length - 1));

    //Write a function that returns false if value equals any number in the destroy values array
    var removeValue = function (value) {
        for (var i = 0; i < valuesToRemove.length; i++) {
            if (valuesToRemove[i] === value) {
                return false;
            }
        }
        return true;
    };

    arrayOfNumbers = arrayOfNumbers.filter(removeValue);

    return arrayOfNumbers;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
