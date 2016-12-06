
function checkCashRegister(price, cash, cid) {
  var change;

// cash - price = changeDue

//while changeDue !== 0 
        while changeDue >= 100
            add 100.00 to "ONE HUNDRED"
            minus 100.00 from changeDue
        while changeDue >= 20
            add 20.00 to "TEWENTY"
            minus 20.00 from changeDue
        REPEAT FOR ALL OTHER DENOMINATIONS


  // Here is your change, ma'am.
  return change;
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