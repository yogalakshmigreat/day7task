// install the xhr2 library in the terminal
// for that in your terminal type the following:
// npm install xhr2

// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
  //  console.log(data);
  let cregion = [];

    for (let countryregion of data) {
        cregion.push(countryregion['region']);
    }

    console.log(cregion);
 let result = cname.filter((cregion, cname) => {
   if (cname == asia) {
         return true;
     } else {
         return false;
     }
});

 console.log(cname);

   let cname = [];

    for (let countryname of data) {
        cname.push(countryname['name']);
    }

    console.log(cname);
};

// send the http request
xhr.send();