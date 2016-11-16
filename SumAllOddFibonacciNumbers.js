Number.prototype.isEven = function () {
    if (this % 2 === 0) {
        return true;
    } else return false;
};

function sumFibs(num) {

    //generate the Fib sequence up to the num

    var sumFibArr;
    var fibArray = fibArrayGenerator(num);
    console.log(fibArray);

    fibArray = fibArray.filter(function (value) {
        if (value.isEven()) return false;
        else return true;
    });

    console.log(fibArray);

    sumFibArr = fibArray.reduce(function(total, num) {return total + num;});

    return sumFibArr;
}

console.log(sumFibs(3978423455));

function fibArrayGenerator(num) {

    var fibArray = [1];
    var currentFibValue = 1;
    var fibPointer = 0;

    while (currentFibValue <= num) {

        fibArray.push(currentFibValue);
        currentFibValue += fibArray[fibPointer];
        fibPointer++;
    }

    return fibArray;

}
