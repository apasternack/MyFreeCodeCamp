
function booWho(input) {

    var inputType = typeof input;

    if(inputType === "boolean") {
        return true;
    }

    return false;
}

console.log(booWho(null));

