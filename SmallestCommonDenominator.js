function smallestCommons(arr) {


    var topOfRange;
    var bottomOfRange;
    var currentLowestMultiple;
    var isMultipleOfAllValues = false;

    if (arr[0] > arr[1]) {
        topOfRange = arr[0];
        bottomOfRange = arr[1];
    } else {
        topOfRange = arr[1];
        bottomOfRange = arr[0];
    }

    currentLowestMultiple = topOfRange * bottomOfRange;

    var counter = topOfRange - 1;

    while (!isMultipleOfAllValues) {

        if (currentLowestMultiple % counter !== 0) currentLowestMultiple *= counter;
        else if (counter === (bottomOfRange + 1)) isMultipleOfAllValues = true;
        counter--;

    }

    return currentLowestMultiple;
}


console.log(smallestCommons([1, 5]));

    /*

    1 - generate next multiple function(currentMultiple, bottomOfRange, topOfRange)
        a - start by multiplying topOfRange * bottomOfRange;
        b - test for even divided % for loop through range topOfRange to bottomOfRange
            i - if one value does not pass this test multiply the current multiple value, continue down the loop






    /*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
  
  The range will be an array of two numbers that will not necessarily be in numerical order.
  
  e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/