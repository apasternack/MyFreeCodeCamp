
function pairElement(nucleotideString) {

    var dnaBasePairs = [["A", "T"], ["C", "G"], ["G", "C"], ["T", "A"]];
    var basePairToAdd;
    var matchesBasePairs = [];

    //loop through each character of the nucleotideString
    for (var i = 0; i < nucleotideString.length; i++) {

        //match up character with appropriate base pair 

        findBasePair(nucleotideString[i]);

        function findBasePair(nucleotide) {

            basePairToAdd = dnaBasePairs.filter(
                function (nucleotideInBasePairArray) {

                    if (nucleotide === nucleotideInBasePairArray[0]) {
                        return true;
                    }
                }
            );
            console.log(basePairToAdd);
            basePairToAdd = basePairToAdd[0];
            console.log(basePairToAdd);
            matchesBasePairs.push(basePairToAdd);

        }
    }

    return matchesBasePairs;
}

console.log(pairElement("GCG"));