//scraping Free Code Camp for how many completed challenges I did

var name = "apasternack";
$.get('https://www.freecodecamp.com/' + name, function(response) {
//   console.log(response);
// var challenges = $(response).find('tbody tr').length;

var challenges = response.replace(/<thead>[\s|\S]*?<\/thead>/g).match(/<tr>/g).length;
console.log(challenges);
});

