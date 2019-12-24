const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=97a24bd105066a37be2bc737641f0a2a&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}