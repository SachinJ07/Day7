
let XMLHttpRequest = require('xhr2');



let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    
   let AsianCountries = result.filter((rtn) => rtn.continents == "Asia").forEach(element => console.log("Country : ",element.name.common))
}