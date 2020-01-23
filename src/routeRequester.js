const axios = require('axios');

let date = new Date();

function routeRequester(routes, agency){
  // show time
  console.log('Making request, date and time is: ', date.toLocaleString("en-us", {timeZone: "America/Los_Angeles"}));
  
  // loop through all the provided routes for specific metro agency
  routes.forEach(route => {
    // make call via axios to api for specific route/agency
    axios({
      method: "GET",
      url: `https://api.metro.net/agencies/${agency}/routes/${route}/vehicles/`
    })
    .then( res => {
      // store that route info in our database
      console.log('Request completed at: ', date.toLocaleString("en-us", {timeZone: "America/Los_Angeles"}));
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
    routeRequester
}
