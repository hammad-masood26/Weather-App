function getWeather() {
    let city = document.querySelector("#cityName").value
    let API_key = "2fffdf48178d85747943c1ae8ed0de5a"

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response);
            document.querySelector("#result").innerHTML = `Weather : ${response.data.main.temp} °C`
            document.querySelector("#feels_like").innerHTML = `Feels like : ${response.data.main.feels_like} °C`
            document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
            document.querySelector("#result").innerHTML = `Not Found`
        })

}