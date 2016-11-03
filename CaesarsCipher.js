
function rot13(str) { // LBH QVQ VG!

    var message = str;
    var decodedMessage = '';
    var character = 0;

    //for loop through the string
    for (var i = 0; i < str.length; i++) {
        character = message.charCodeAt(i);

        //In case of uppercase

        if (character >= 65 && character <= 90) {

            if ((character - 13) < 65) {
                character = character + 13;
                decodedMessage += String.fromCharCode(character);

            } else {
                decodedMessage += String.fromCharCode(character - 13);
            }

            //In case of lowercase
        } else if (character >= 97 && character <= 122) {

            if ((character - 13) < 97) {
                character = character + 13;
                decodedMessage += String.fromCharCode(character);

            } else {
                decodedMessage += String.fromCharCode(character - 13);
            }
        } else {
            decodedMessage += String.fromCharCode(character);

        }

    }

    return decodedMessage;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));