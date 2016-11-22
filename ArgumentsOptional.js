
function addTogether() {
  
    if (arguments.length === 2) return arguments[0] + arguments[1];
    if (arguments.length === 1) {
        var closureValue = arguments[0];
        return (function(numberToAdd) {
            return numberToAdd + closureValue;
        });

    }

  console.log(arguments.length);
  
  return false;
}

console.log(addTogether(2));

var addTwo = addTogether(2);

console.log(addTwo(4));
