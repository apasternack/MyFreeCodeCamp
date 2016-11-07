
function myReplace(str, wordToReplace, newWord) {

    console.log(/[A-Z]/.test(wordToReplace[0]));

    if(/[A-Z]/.test(wordToReplace[0])) {
        newWord = newWord.capitalizeFirstLetter();
    }
    if(/[a-z]/.test(wordToReplace[0])) {
        newWord = newWord.minusculeFirstLetter();
    }
    str = str.replace(wordToReplace, newWord);

    return str;
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.minusculeFirstLetter = function() {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
