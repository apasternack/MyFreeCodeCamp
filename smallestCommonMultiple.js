
function smallestCommons(arr) {
console.log(arr);

    if (arr[0] === arr[1]) alert('you so silly!');

    if (arr[0] > arr[1]) {
        max = arr[0];
        min = arr[1];
    } else {
        const max = arr[1];
        const min = arr[0];        
    }
    console.log(`min: ${min}  max:${max}`);

    const maxArray = _.range(max, min * max + max, max);
    console.log(maxArray);
  
    const commonMultiples = maxArray.filter(x => x % min === 0);

    return commonMultiples[0];

}

console.log(smallestCommons([7,3]));
