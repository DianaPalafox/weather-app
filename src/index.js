import "./style.css"   
// import { weatherApp } from "./weather-logic";
// document.addEventListener("DOMContentLoaded", weatherApp); */

    const form = document.querySelector("form");
    const search = document.querySelector("#search");
    const weatherContainer = document.querySelector(".weather-container");
    const locationContainer = document.querySelector(".location-container");
    const tempContainer = document.querySelector(".temp-container")
    const feelsLikeData = document.querySelector("#feels_like")
    const humidityData = document.querySelector("#humidity")
    const minTemp = document.querySelector("#min-temp")
    const maxTemp = document.querySelector("#max-temp")

    async function fetchWeatherData() {
        try {
            let searchValue = search.value; 
            if(!searchValue) {searchValue = "Mexico City"};

            const units = "metric"; 
            
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=c99b6da448814b444b8c69bc9d4786c8&units=${units}`, {mode: "cors"});
            const weatherData = await response.json();
            const imageData = weatherData.weather[0].main; 
            const iconData = weatherData.weather[0].icon; 
            console.log(iconData)
            
            console.log(weatherData)

            weatherContainer.textContent = weatherData.weather[0].description.toUpperCase();
            locationContainer.textContent = weatherData.name; 
            tempContainer.textContent = `${Math.ceil(weatherData.main.temp)  } ºC`;      
            feelsLikeData.textContent = `${Math.floor(weatherData.main.feels_like)  } ºC`;   
            humidityData.textContent = `${weatherData.main.humidity}%`
            minTemp.textContent = `${Math.floor(weatherData.main.temp_min)  } ºC`;   
            maxTemp.textContent = `${Math.ceil(weatherData.main.temp_max)  } ºC`;   
            
            changeIcon(iconData)
            changeBackgroundImage(imageData)

        } catch(error) {
            console.log(error)
        }
       
    }

    const arrayOfImagesClear = ["./img/s0.jpeg", "./img/s1.jpeg", "./img/s2.jpeg", "./img/s3.jpeg", "./img/s4.jpeg", "./img/s5.jpeg", "./img/s6.jpeg", "./img/s7.jpg", "./img/s8.jpeg", "./img/s9.jpeg"];
    const arrayOfImagesCloudy = ["./img/c1.jpeg", "./img/c2.jpeg", "./img/c3.jpeg", "./img/c4.jpeg", "./img/c8.jpeg"];
    const arrayOfImagesRain = ["./img/r1.jpeg", "./img/r2.jpeg", "./img/r3.jpeg", "./img/r4.jpeg", "./img/r5.jpeg",]
    const arrayOfImagesSnow = ["./img/n1.jpeg", "./img/n2.jpeg", "./img/n3.jpeg", "./img/n4.jpeg", "./img/n6.jpeg"]

   function changeBackgroundImage(imageData) {
       if(imageData === "Clear"){
           const randImg =  Math.floor(Math.random() * arrayOfImagesClear.length);
           const img = arrayOfImagesClear[randImg]
           console.log(img)
           document.body.style.backgroundImage = `url(${img})`
       }
       if(imageData === "Clouds"){
            const randImg =  Math.floor(Math.random() * arrayOfImagesCloudy.length);
            const img = arrayOfImagesCloudy[randImg]
            document.body.style.backgroundImage = `url(${img})`
        }
        if(imageData === "Rain" || imageData === "Thunderstorm" || imageData === "Drizzle" || imageData === "Tornado"){
            const randImg =  Math.floor(Math.random() * arrayOfImagesRain.length);
            const img = arrayOfImagesRain[randImg]
            document.body.style.backgroundImage = `url(${img})`
        }
        if(imageData === "Snow"){
            const randImg =  Math.floor(Math.random() * arrayOfImagesSnow.length);
            const img = arrayOfImagesSnow[randImg]
            document.body.style.backgroundImage = `url(${img})`
        }
   }
   
    const iconsWeather = ["01d", "01n", "02d", "02n", "03d", "03n", "04d", "04n", 
                         "09d", "09n", "10d", "10n", "11d", "11n", "13d", "13n", 
                         "50d", "50n"]
  
    function changeIcon(iconData) {
        const result = iconsWeather.filter((icon) => icon === iconData)
        const elem = document.querySelector(".icon-img")
        elem.src = `icons/${result}.png`   
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetchWeatherData(); 
        search.value =  ""; 
    }); 
        
    document.addEventListener("DOMContentLoaded", fetchWeatherData);
  

    