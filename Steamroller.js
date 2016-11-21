

function steamrollArray(arr) {

    var newArray = [];
    var myRecursiveFunction = function (element) {

        //if number add to new array

        if (typeof element === 'number') newArray.push(element);
        else if (!Array.isArray(element)) newArray.push(element);
        else {
            element.forEach(myRecursiveFunction);
        }
    };

    arr.forEach(myRecursiveFunction);

    return newArray;

}

console.log(steamrollArray([1,
    [2],
    [3, [[4]]]
]));


