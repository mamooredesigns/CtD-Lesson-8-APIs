let city = document.getElementById("city")

document.getElementById("search").addEventListener("click", function(){
    userTyped = city.value
    console.log("city is:", typeof userTyped, userTyped)
    apiKey = /*your key here*/

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+userTyped+"&appid="+apiKey
    console.log("api URL: ", apiUrl)

    fetch(
        apiUrl
    )
    .then(response => response.json())
    .then(responseData => {
        console.log('All response data', responseData);
        const currentWeather = responseData.main;
        console.log('Cut down to just main: ', currentWeather)
        const temp = (currentWeather.temp - 273.15) * (9/5) + 32;
        const feelsLike = (currentWeather.feels_like - 273.15) * (9/5) + 32;
        let tempDiv = document.createElement("div")
        tempDiv.textContent = temp.toFixed(0) + '\u00B0' + 'F'
        let feelsLikeDiv = document.createElement("div")
        feelsLikeDiv.textContent = 'Feels Like: ' + feelsLike.toFixed(0)

        //(0K − 273.15) × 9/5 + 32 = -459.7°F


        document.getElementById("info").appendChild(tempDiv)
        document.getElementById("info").appendChild(feelsLikeDiv)
        }
    )
})