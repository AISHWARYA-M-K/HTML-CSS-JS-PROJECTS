const apikey ="efd86a13b573f9b79ee8cfe21ef43e1d";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.queryselector(".error").style.display = "block";
        document.queryselector(".weather").style.display ="none";
    }else{
            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
            if(data.weather[0].main == "clouds"){
                weatherIcon.src = "images/clouds.png";
            }else if(data.weather[0].main == "clear"){
                weatherIcon.src = "images/clear.png";
            }else if(data.weather[0].main == "rain"){
                weatherIcon.src = "images/rain.png";
            }else if(data.weather[0].main == "drizzle"){
                weatherIcon.src = "images/drizzling.png";
            }else if(data.weather[0].main == "mist"){
                weatherIcon.src = "images/mist.png";
            }else if(data.weather[0].main == "snow"){
                weatherIcon.src = "images/snow.png";
            }else if(data.weather[0].main == "thunderstorm"){
                weatherIcon.src = "images/thunderstorm.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.queryselector(".weather").style.display ="none";
    


    }


    
}
searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkweather(city);
});
