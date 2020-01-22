const axios = require('axios');
const dataSaver = require('./dataSaver');

function apiRequester(){
    console.log('function called');
    axios({
        method: "get",
        url: `https://api.metro.net/agencies/lametro/routes/20/vehicles/`
    })
    .then( res => {
        console.log(res);
        if (res.status === 200){
            console.log('Success!');
            console.log(res.data.items);
        }
        else {
            console.log(res.status);
        }
    })
    .catch(error => {
        console.log('Request error to metro API!', error);
    });
}

module.exports = {
    apiRequester
}