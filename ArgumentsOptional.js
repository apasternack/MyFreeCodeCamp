function addTogether() {
  
    if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') return arguments[0] + arguments[1];
    if (arguments.length === 1 && typeof arguments[0] === 'number') {
        var closureValue = arguments[0];
        return (function(numberToAdd) {
            if (typeof numberToAdd === 'number') return numberToAdd + closureValue;
            else return undefined;
        });

    }

  console.log(arguments.length);
  
  return undefined;
}

console.log(addTogether(2));

var addTwo = addTogether(2);

console.log(addTwo(4));
