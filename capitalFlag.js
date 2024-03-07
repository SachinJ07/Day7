
let XMLHttpRequest = require('xhr2');



let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    let data = result.forEach(element => { 
        console.log(
            `
    Name : ${element.name.common}
    Capital : ${element.capital}
    Flag : ${element.flag}
            `)       
    });
}

