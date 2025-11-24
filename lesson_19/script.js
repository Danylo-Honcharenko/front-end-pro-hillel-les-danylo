class WeatherApi {

    getWeatherInfo = async () => {

        const url = new URL("https://api.openweathermap.org/data/2.5/weather");
        url.searchParams.set("q", "Kyiv");
        url.searchParams.set("units", "metric");
        url.searchParams.set("lang", "uk");
        url.searchParams.set("appid", "10a064de792666535133f2df98c8e5bf");

        return fetch(url.toString())
            .then(res => res.json())
            .catch(err => console.log(err));
    }
}

const setDataToHTML = () => {
    const weatherApi = new WeatherApi();

    const tempInfo = document.querySelector("#temp-info > h1");
    const desc = document.querySelector("#temp-info > h3");
    const restInfo = document.querySelectorAll("#rest-info > h3");

    weatherApi.getWeatherInfo()
        .then(info => {
            tempInfo.textContent = tempInfo.textContent.replace("...", info.main.temp);
            desc.textContent = info.weather[0].description;
            restInfo[0].textContent = restInfo[0].textContent.replace("...",info.main.feels_like);
            restInfo[1].textContent = restInfo[1].textContent.replace("...", info.wind.speed);
        });
}

setDataToHTML();

const updateButton = document.querySelector("#update");
updateButton.addEventListener("click", () => {
    setDataToHTML();
});