function getWeather() {
    const cityName = document.getElementById('inputArea').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=77226e8fefb13720b9d90de4275ae444`;
    onFetch(url);
}
city = document.querySelector('.city');
temperature = document.querySelector('.temperature');
humidity = document.querySelector('.humidity');
forcast = document.querySelector('.forcast');
image = document.querySelector('.image');

function onFetch(url) {
    try {
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error("Write correct city name");
            }

            response.json().then(data => {
                city.textContent = data.name;
                temperature.textContent = `${(data.main.temp - 273.15).toFixed(3)}°C`;
                humidity.textContent = data.main.humidity;
                forcast.textContent = data.weather[0].description;
                let icon = data.weather[0].icon;
                let img_url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                image.src = img_url;
            }).catch(error => console.log(error));
        })
    }
    catch {
        console.log(error);
    }
}