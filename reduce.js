
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
  //  console.log(data);

  let cpopulation = [];

  for (let countrypopulation of data) {
    cpopulation.push(countrypopulation['population'])
  }  
  console.log(cpopulation);
  
    let result = cpopulation.reduce((population, countrypopulation) => {
     return population + countrypopulation;
 }, 10);

 console.log(result);
};


xhr.send();