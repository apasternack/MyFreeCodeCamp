
function checkCashRegister(price, cash, cashInDrawerArray) {

    var cashInCents = cash * 100;
    var priceInCents = price * 100;

    var changeDueInCents = cashInCents - priceInCents;
    // cashInDrawerArray = []; //CHNAGE THIS
    var cashInDrawerTotalInCents = 0;
    var coinOrBillTypeValueInCents;
    
    cashInDrawerArray.forEach(function (coinOrBillType) {
        
        coinOrBillTypeValueInCents = coinOrBillType[1] * 100;
        cashInDrawerTotalInCents += coinOrBillTypeValueInCents;

    });

    console.log(cashInDrawerTotalInCents);
    if (changeDueInCents > cashInDrawerTotalInCents ) return "Insufficient Funds";
    
    if (changeDueInCents === cashInDrawerTotalInCents) return "Closed";

    



    //     // cash - price = changeDue

    //     // if changeDue > cid total then return "Insufficient Funds"

    //     // if change = cid then return "Closed"

    //     //while changeDue !== 0 
    //     while changeDue >= 100 AND coinOrBillType[1] !== 0
    //          add 100.00 to "ONE HUNDRED"
    //          minus 100.00 from changeDue
    //     while changeDue >= 20 AND coinOrBillType[1] !== 0
    //          add 20.00 to "TEWENTY"
    //          minus 20.00 from changeDue
    // REPEAT FOR ALL OTHER DENOMINATIONS

    // // return changeArray;


    // Here is your change, ma'am.
    return cash;
}

// Example cash-in-drawer array:
var cashInDrawer = [["PENNY", 1.01],
["NICKEL", 2.05],
["DIME", 3.10],
["QUARTER", 4.25],
["ONE", 90.00],
["FIVE", 55.00],
["TEN", 20.00],
["TWENTY", 60.00],
["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));