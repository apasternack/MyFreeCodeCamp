Array.prototype.clone = function() {
	return this.slice(0);
};

function dropElements(arr, func) {

    var newArray = arr.clone();

    for (var i = 0; i < arr.length; i++) {

        if(!func(arr[i])) newArray.shift();
        else break;

    }

    return newArray;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
