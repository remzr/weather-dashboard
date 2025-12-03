import { getWeatherData } from "./weather-api";

export function updateTemperature() {
    const degrees = document.getElementById("temperature");

    let temp;

    //Get updated weather data from API
    async function callAsync() {
        temp = await getWeatherData();
        degrees.innerText = temp.currentConditions.temp;
    }
    callAsync();
}