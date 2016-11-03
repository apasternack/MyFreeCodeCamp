//make a roman numeral object that convertDigit() returns
//make array with roman numeral values


function convertToRoman(num) {


    var romanNumeralArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'v', 'x'];
    var romanNumeralSet = [];
    var romanNumeral = "";
    var romanNumeralObject;
    var baseTenDigit;

    if (num > 1000) {

        baseTenDigit = num.toString().slice(0, 1);
        romanNumeralSet = romanNumeralArray.slice(6, 9);

        romanNumeralObject = convertDigit(baseTenDigit);
        romanNumeral = printRomanNumeral(baseTenDigit, romanNumeralSet);


        //set array to appropriate 1's 5's 10's value and take RomanNumeral transform into real roman numeral'

    }

    if (num > 100) {
        //fill in
    }

    if (num > 10) {
        //fill in
    }


    return romanNumeral;

}




console.log(convertToRoman(3352));



//given a roman numeral set and roman numaral object print a roman numeral that represents a base 10 digit; return a RN representation of base10 digit, eg "IX"
function printRomanNumeral(digit, romanNumeralSet) {

    var ones = romanNumeralSet[0];
    var fives = romanNumeralSet[1];
    var tens = romanNumeralSet[2];
    var romanNumeral = '';

    //if 1-3 print 1-3 "1"s 
    if (digit < 4) {
        for (var i = digit; i > 0; i--) {
            romanNumeral += ones;
        }
    }
    //if 4 print 1 "1"  && print one "5"
    if (digit === 4) {
        romanNumeral = ones + fives;

    }
    // if 5 print NO "1" && print "5"
    if (digit === 5) {
        romanNumeral = fives;
    }
    // if 6-8 print 6-8 - 5 "1"s
    if (digit > 5 && digit < 9) {
        romanNumeral = fives;
        for (var i = digit - 5; i > 0; i--) {
            romanNumeral += ones;
        }
    }
    // if 9 print 1 "1" and a "10"
    if (digit === 9) {
        romanNumeral = ones + tens;
    }

    return romanNumeral; //STRING VALUE TO BUILD UP ROMAN NUMERAL 
}

function convertDigit(digit) {

    digit = parseInt(digit);
    var romanNumeralObject = {
        ones: 0,
        fives: 0,
        tens: 0
    }

    if (digit < 4) {
        romanNumeralObject.ones = digit;
    }
    if (digit === 4) {
        romanNumeralObject.ones = 1;
        romanNumeralObject.fives = 1;
    }
    if (digit === 5) {
        romanNumeralObject.fives = 1;
    }
    if (digit > 5 && digit < 9) {
        romanNumeralObject.fives = 1;
        romanNumeralObject.ones = digit - 5;
    }
    if (digit === 9) {
        romanNumeralObject.ones = 1;
        romanNumeralObject.tens = 1;
    }

    return romanNumeralObject;
}