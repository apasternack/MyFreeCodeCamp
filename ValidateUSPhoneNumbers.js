
function telephoneCheck(numberToCheck) {

    var isValidPhoneNumber;
    var isValidphoneNumberWithCountryCode = false;
    var isValidPhoneNumberWithoutCountryCode = false;
    var isInvalidPhoneNumber = false;
    var expectedRightParenthesisPosition;
    var expectedLefttParenthesisPosition;

    // 1) count significant values skipping over - and () and " " and anything NOT 0-9, store distilled numerical string

    if(numberToCheck.includes("?")) return false;
    if(numberToCheck[0] === "-") return false;

    var numberToCheckArray = numberToCheck.split("");
    var numberToCheckArrayFilteredWithParenthesis = numberToCheckArray.filter(function (number) {

        if (number.match(/[0-9()]/g)) {
            return true;
        }

    });
    var numberStringFilteredWithParenthesis = numberToCheckArrayFilteredWithParenthesis.join('');
    var rightParenthesisPostion = numberStringFilteredWithParenthesis.search(/[)]/);
    var leftParenthesisPostion = numberStringFilteredWithParenthesis.search(/[(]/);
    var numberStringContainParenthesis = (numberStringFilteredWithParenthesis.match(/[()]/g) !== null);
    var numberToCheckArrayFiltered = numberToCheckArray.filter(function (number) {

        if (number.match(/[0-9]/g)) {
            return true;
        }

    });

    if (numberToCheckArrayFiltered.length === 11) isValidphoneNumberWithCountryCode = true;
    if (numberToCheckArrayFiltered.length === 10) isValidPhoneNumberWithoutCountryCode = true;
    if (numberToCheckArrayFiltered.length < 10 || numberToCheckArrayFiltered.length > 11) isInvalidPhoneNumber = true;



    console.log(numberToCheckArray);
    console.log(numberToCheckArrayFilteredWithParenthesis);
    console.log(numberToCheckArrayFiltered);



    // 2) if less than 10 reject, return false

    if (isInvalidPhoneNumber) return false;

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

    if (isValidPhoneNumberWithoutCountryCode) isValidPhoneNumber = true;

    // 3) if 11 check that the first digit is 1 if yes, return true, if not return false

    if (isValidphoneNumberWithCountryCode) {
        if (numberToCheckArrayFiltered[0] === '1') isValidPhoneNumber = true;
        else isValidPhoneNumber = false;
    }

    // 4) return value

    return isValidPhoneNumber;
}



console.log(telephoneCheck("-1 (757) 622-7382"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1 456 789 4444"));


// console.log("(555)555-5555".search(/[)]/));