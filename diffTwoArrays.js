
function diffArray(arr1, arr2) {

    var newArr1 = [];
    var newArr2 = [];
    console.log("arr1: " + arr1);
    console.log("arr2: " + arr2);

    //filter one array, inside filter function for loop through second array

    newArr1 = arr1.filter(
        function (arrayOneValue) {
            for (var i = 0; i < arr2.length; i++) {
            //if value is found, pop off both arr1 and arr2
                console.log('1');
                
                if (arrayOneValue === arr2[i]) {
                    //pop arrayOneValue off arr2
                    var array2IndexToDelete = arr2.indexOf(arrayOneValue);
                    arr2.splice(array2IndexToDelete, 1);

                    return false;
                }
            }
            return true;
        }
    );
    newArr2 = arr2;
    // console.log("arr1: " + arr1);
    // console.log("arr2: " + arr2);
    // console.log("arr1NEW: " + newArr1);
    // console.log("arr2NEW: " + newArr2);

    //concatinate two arrays of remaining values, return it

    return newArr1.concat(newArr2);
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
                        ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// console.log(diffArray([6,5,4,3,2,1],
//                         [6,5,4,3,2]));