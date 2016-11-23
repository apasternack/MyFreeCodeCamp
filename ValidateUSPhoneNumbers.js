
function telephoneCheck(numberToCheck) {

    var isValidPhoneNumber;
    var isValidphoneNumberWithCountryCode = false;
    var isValidPhoneNumberWithoutCountryCode = false;
    var isInvalidPhoneNumber = false;
    var expectedRightParenthesisPosition;
    var expectedLefttParenthesisPosition;

    // 1) Exclude numbers with erronious characters as follows
    if (numberToCheck.includes("?")) return false;
    if (numberToCheck[0] === "-") return false;

    // 2) filter out everything but 0-9 and "(" ")"
    var numberToCheckArray = numberToCheck.split("");
    var numberToCheckArrayFilteredWithParenthesis = numberToCheckArray.filter(function (number) {

        if (number.match(/[0-9()]/g)) {
            return true;
        }

    });

    // 3) filter out parenthesis
    var numberToCheckArrayFiltered = numberToCheckArrayFilteredWithParenthesis.filter(function (number) {

        if (number.match(/[0-9]/g)) {
            return true;
        }
    });

    // 4) if completely filtered number is an invalid length return false
    if (numberToCheckArrayFiltered.length < 10 || numberToCheckArrayFiltered.length > 11) isInvalidPhoneNumber = true;
    if (isInvalidPhoneNumber) return false;
    if (numberToCheckArrayFiltered.length === 11) isValidphoneNumberWithCountryCode = true;
    if (numberToCheckArrayFiltered.length === 10) isValidPhoneNumberWithoutCountryCode = true;


    // 5) check if parenthesis are in appropriate places
    var numberStringFilteredWithParenthesis = numberToCheckArrayFilteredWithParenthesis.join('');
    var rightParenthesisPostion = numberStringFilteredWithParenthesis.search(/[)]/);
    var leftParenthesisPostion = numberStringFilteredWithParenthesis.search(/[(]/);
    var numberStringContainParenthesis = (numberStringFilteredWithParenthesis.match(/[()]/g) !== null);

    if (numberStringContainParenthesis) {

        if (isValidPhoneNumberWithoutCountryCode) {
            expectedRightParenthesisPosition = 4;
            expectedLefttParenthesisPosition = 0;
        }

        if (isValidphoneNumberWithCountryCode) {
            expectedRightParenthesisPosition = 5;
            expectedLefttParenthesisPosition = 1;
        }

        if (!(rightParenthesisPostion === expectedRightParenthesisPosition || rightParenthesisPostion === '-1')) return false;
        if (!(leftParenthesisPostion === expectedLefttParenthesisPosition || rightParenthesisPostion === '-1')) return false;
    }


    // 6) check if completely filtered number is a valid US number without country code OR with country code and correct US code "1"

    if (isValidPhoneNumberWithoutCountryCode) isValidPhoneNumber = true;

    if (isValidphoneNumberWithCountryCode) {
        if (numberToCheckArrayFiltered[0] === '1') isValidPhoneNumber = true;
        else isValidPhoneNumber = false;
    }

    // 7) return value

    return isValidPhoneNumber;
}



console.log(telephoneCheck("1 (555) 555-5555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1 456 789 4444"));


// console.log("(555)555-5555".search(/[)]/));


    // console.log(numberToCheckArray);
    // console.log(numberToCheckArrayFilteredWithParenthesis);
    // console.log(numberToCheckArrayFiltered);