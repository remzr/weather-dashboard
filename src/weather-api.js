export async function getWeatherData() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/biel,schweiz?unitGroup=metric&key=8HFYQZWMVZ7VYUQAJGURCTG47&contentType=json&elements=datetime,address,temp");
    const weatherData = await response.json();
    return weatherData;
}