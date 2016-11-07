
function translatePigLatin(str) {

    var stringToTranslate = '';
    stringToTranslate = str;

    var wordArray = stringToTranslate.split(' ');

    wordArray = wordArray.map(translateWord);

    str = wordArray.join(' ');

    return str;
}

console.log(translatePigLatin("consonants are awesome to have"));



function startsWithAVowel(word) { return /[aeiouyAEIOUY]/.test(word.charAt(0)); }

function translateWord (word) {

    if (startsWithAVowel(word)) {

        word += 'way';
        return word;

    } else {

        // locate first consonate group, cut it, move it to end

        for (var i = 0; i < word.length; i++) {
            if (startsWithAVowel(word.charAt(i))) {

                var newWord = word.substr(i);
                var consonantClusterToMove = word.substr(0, i);
                newWord = newWord + consonantClusterToMove + 'ay';

                return newWord;
            }
        }
    }
}







    // 1) take sentence, divide into word array
    // 2) take off period from last word if there is one
    // 3) loop through array
    // a) test for starting with vowel, if so modigy accordingly
    // b) test for starting with consonant, if so modify accordingly
    // 4) assemble array of words to a string 
    // 5) add period if there was one to begin with


