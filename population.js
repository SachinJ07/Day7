
let XMLHttpRequest = require('xhr2');



let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    var result = JSON.parse(request.response);


    

    result.filter(rtn => rtn.population <= 200000).forEach(element => console.log("Country : ",element.name.common," \nPopulation : ", element.population,"\n"))
}