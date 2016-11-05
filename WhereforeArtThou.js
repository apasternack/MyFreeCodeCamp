
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    console.log(Object.keys(collection[0]));



    console.log(collection[0].hasOwnProperty('last'));

    //  1) loop through array of objects

    for (var i = 0; i < collection.length; i++) {

        var passesTest = true;

        for (var property in source) {
            if (!collection[i].hasOwnProperty(property)) {
                passesTest = false;
                console.log(" bool " + passesTest);

            }

            else if (source[property] !== collection[i][property]) {
                passesTest = false;
                console.log(" bool " + passesTest);
            }
            // console.log(source[property]);
            // console.log(collection[i][property]);
            // console.log(passesTest);

        }

        if (passesTest === true) {
            arr.push(collection[i]);
        }

    }

    console.log(arr);

    //  2) for each object check if it contains all key/value pairs in source (iterate through source?)





    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
