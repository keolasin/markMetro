const axios = require('axios');

let routeList = [2, 4, 10, 20];
let metro = 'lametro';
let date = new Date();

function routeRequester(routes, agency){
  // show time
  console.log('Making request, date and time is: ', date.toLocaleString());
  
  // loop through all the provided routes for specific metro agency
  routes.forEach(route => {
    // make call via axios to api for specific route/agency
    axios({
      method: "GET",
      url: `https://api.metro.net/agencies/${agency}/routes/${route}/vehicles/`
    })
    .then( res => {
      // store that route info in our database
      console.log('Request completed at: ', date.toLocaleString());
      console.log(`\nCalled route ${route} with items: `);
      console.log(res.data.items, '\n');
    })
    // log errors
    .catch( error => {
      console.log('Request error: ', error);
    });
  });
}

module.exports = {
    apiRequester
}
