
function convertHTML(str) {

        str = str.replace(/&|'|"|<|>/g, function(match) {

            if(match === "&") return "&​amp;";
            if(match === "'") return "&​apos;";
            if(match === "<") return "&​lt;";
            if(match === ">") return "&​gt;";
            if(match === '"') return "&quot;";

        });

    return str;
}

console.log(convertHTML("Dolce & Gabb'ana"));

// var str = 'Twas the xmas night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr); 

// console.log(str.match(/xmas/ig));

    // console.log(str.match(/&|'|"|<|>/g));
