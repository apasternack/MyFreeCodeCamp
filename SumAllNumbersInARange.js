
function sumAll(arr) {

    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = [];

    for (var i = min; i <= max; i++) {

        sum.push(i);

    }

    sum = sum.reduce(function (a, b) {
        return a + b;
    });


    return sum;
}

console.log(sumAll([10, 5]));
