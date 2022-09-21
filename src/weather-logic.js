
/*const weatherApp = () => {
    const form = document.querySelector("form");
    const search = document.querySelector("#search");
    const buttonSearch = document.querySelector("button")

    async function fetchWeatherData(e) {
        e.preventDefault();
        let searchValue = search.value; 
        if(!searchValue) {searchValue = "Mexico"};
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=c99b6da448814b444b8c69bc9d4786c8`, {mode: "cors"});
        const weatherData = await response.json();
        console.log(weatherData);  
    }

    form.addEventListener("submit", fetchWeatherData);
    buttonSearch.addEventListener("click", fetchWeatherData);
    //document.addEventListener("DOMContentLoaded", fetchWeatherData);
}

export { weatherApp }/*



