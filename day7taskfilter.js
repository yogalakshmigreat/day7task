
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
  // console.log(data);
 




let cpopulation = [];
  for (let countrypopulation of data) {
    cpopulation.push(countrypopulation['population'])
  }  
 console.log(cpopulation);
 let filteredcpopulation = [];

 for (let person of cpopulation) {
    if (person[1] >= 200000) filteredcpopulation.push(person[0]);
 }
console.log(filteredcpopulation);




  
};

// send the http request
xhr.send();