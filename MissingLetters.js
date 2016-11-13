
function fearNotLetter(str) {
  
  //loop through string
  
  //check if there is a next letter and if the next letter charcode is not +1 then return letter +1 charcode present letter in for loop (i) 
  
  var missingLetter;
  
  for(var i = 0; i < (str.length - 1); i++) {
    
    if ( str.charCodeAt(i) !== str.charCodeAt(i+1) - 1 ) {
      return String.fromCharCode((str.charCodeAt(i) + 1));
    }
    
    
  }
  
  
  return missingLetter;
}

fearNotLetter("abce");
