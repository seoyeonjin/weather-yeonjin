require('dotenv').config();

const axios = require("axois");


const latitude = 37.5322559;
const longitude = 127.1201244;
const apiKey = process.env.apiKey;

function getWeather(lat,lon){
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    return axios.get(url).then(function(response){
        console.log(response.data);
        return response.data;
    })
}

async function printWeather(){
    let weatherData = await getWeather(latitude, longitude);
    console.log(weatherData.name+ "의 날씨는"+ String(weatherData.weather[0].main)+ "입니다");
    console.log(weatherData.name+ "의 기온은"+ String(Math.floor(weatherData.main.temp - 273))+"입니다");
}

printWeather();