import "./style.css"   
// import { weatherApp } from "./weather-logic";
// document.addEventListener("DOMContentLoaded", weatherApp); */

    const form = document.querySelector("form");
    const search = document.querySelector("#search");
    const weatherContainer = document.querySelector(".weather-container");
    const locationContainer = document.querySelector(".location-container");
    const tempContainer = document.querySelector(".temp-container")

    async function fetchWeatherData() {
        try {

            let searchValue = search.value; 
            if(!searchValue) {searchValue = "Mexico City"};

            const units = "metric"; 
            
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=c99b6da448814b444b8c69bc9d4786c8&units=${units}`, {mode: "cors"});
            const weatherData = await response.json();
            console.log(weatherData);  

            weatherContainer.textContent = weatherData.weather[0].description.toUpperCase();
            locationContainer.textContent = weatherData.name; 
            tempContainer.textContent = `${Math.ceil(weatherData.main.temp)  } ºC`;
         
        } catch(error) {
            console.log(error)
        }
       
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetchWeatherData(); 
    }); 
        
    document.addEventListener("DOMContentLoaded", fetchWeatherData);
  

    