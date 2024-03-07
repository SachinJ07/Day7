
let XMLHttpRequest = require('xhr2');



let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    let totalPopulation = result.map((element) => element.population).reduce((acc, curr) => {
        return acc + curr;
    })
    console.log("\n Total Population  : ",totalPopulation);
};


