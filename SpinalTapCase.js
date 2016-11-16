
function spinalCase(str) {

    str = str.replace(/ |_|([a-z])([A-Z])/g, function(characterMatched, p1, p2) {

        if (characterMatched === " "  || characterMatched === "_") {
            return "-";
        }

        if ( characterMatched.match(/([a-z])([A-Z])/)) return p1 + "-" + p2;

    });

    str = str.toLowerCase();

    return str;
}

console.log(spinalCase('AllThe-small Things'));

console.log(spinalCase('The_Andy_Griffith_Show'));




//         console.log('AllThe-small Things'.match(/[a-z][A-Z]/g));

// console.log(/[a-z][A-Z]/g.exec('AllThe-small Things'));

// console.log('AllThe-small Things'.replace(/([a-z])([A-Z])/g, function(match, p1, p2) {

//         console.log(arguments);
//         return p1 + "-" + p2;

// }))