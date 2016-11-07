
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    for (var i = 0; i < collection.length; i++) {

        var passesTest = true;

        for (var property in source) {
            if (!collection[i].hasOwnProperty(property) || source[property] !== collection[i][property]) {
                passesTest = false;
            }
            //more clear logically to me but I think the above is more standard, the right of || being else if
            // else if () {      
            //     passesTest = false;
            // }
        }
        if (passesTest === true) {
            arr.push(collection[i]);
        }
    }

    console.log(arr);

    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
