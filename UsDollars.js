
let XMLHttpRequest = require('xhr2');



let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    let usdCountries = result
        .filter((country) => country.currencies && country.currencies.USD)
        .map((country) =>  console.log("Country : ",country.name.common));
};


