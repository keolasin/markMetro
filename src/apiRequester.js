const axios = require('axios');
const writer = require('./writer');

function apiRequester(){
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
    setInterval(() => {
        console.log('hello!');
    }, 2000)
}

module.exports = {
    apiRequester
}