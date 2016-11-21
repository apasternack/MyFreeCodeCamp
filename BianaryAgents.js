
function binaryAgent(str) {

    var charCodeArray = str.split(" ");

    charCodeArray.forEach(
        function(element, index, theArray) { 
            theArray[index] = parseInt(element, 2);
            theArray[index] = String.fromCharCode(theArray[index]);
        }

    );

    return charCodeArray.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
