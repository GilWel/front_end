const locationElement = document.querySelector('.city-text');
const iconElement = document.querySelector('.icon-big img');
const conditionElement = document.querySelector('.weather-text');
const temperatureNowElement = document.querySelector('.temperature-now-text');
const dateElement= document.querySelector('#today');
const iconSmallElement = document.querySelectorAll('.icon-small img');
const weekDayElement = document.querySelectorAll('.text-weekDay');
const tempMaxElement = document.querySelectorAll('.temperature-max-text');
const tempMinElement = document.querySelectorAll('.temperature-min-text');


const getWeatherForecastByLocation = async () => {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const data = await response.json();
  
    const weatherForecast = await fetch(`http://api.weatherapi.com/v1/current.json?key=512a90261096497bb74174453240711&q=${data.latitude},${data.longitude}&aqi=no`);

    const allDataAboutWeather = await weatherForecast.json();

renderWeatherInfo(data.city, allDataAboutWeather.current.condition.icon, allDataAboutWeather.current.condition.text, allDataAboutWeather.current.temp_c, new Date());
console.log(data.latitude);
console.log(data.longitude)

const sevenDaysWeather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=512a90261096497bb74174453240711&q=${data.latitude},${data.longitude}&days=6&aqi=no&alerts=no`);
const allDataAboutSevenDaysWeather = await sevenDaysWeather.json();
console.log(allDataAboutSevenDaysWeather);

let sortedWeatherSevenDays = [];
sortedWeatherSevenDays = allDataAboutSevenDaysWeather.forecast.forecastday.map(
    (weatherForOneDay) => {
        const filteredWeatherForOneDay = {
            date:  new Date(weatherForOneDay.date).toLocaleString('en-US', { weekday: 'short' }),
            
            smallIcon: weatherForOneDay.day.condition.icon,
            maxTemp: weatherForOneDay.day.maxtemp_c,
            minTemp: weatherForOneDay.day.mintemp_c,
        }
        console.log(filteredWeatherForOneDay)
        return filteredWeatherForOneDay;    /// 7 days []
    }
)


sortedWeatherSevenDays.forEach((item, index) => {
    tempMaxElement[index].textContent = item.maxTemp +'°';
    tempMinElement[index].textContent = item.minTemp +'°';
    weekDayElement[index].textContent = item.date;
    iconSmallElement[index].src = item.smallIcon;
  });
}

getWeatherForecastByLocation();
function renderWeatherInfo (city, icon, condition, temperature, date) {
locationElement.textContent = city;
iconElement.src = icon;
conditionElement.textContent = condition;
temperatureNowElement.textContent = temperature +'°';
dateElement.textContent = `${date.toDateString()}`
}
























