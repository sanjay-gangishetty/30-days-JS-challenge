async function getWeatherDetail(cityInput) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=""&units=metric`
        const response = await fetch(url);
        const data = await response.json();
        const temp = data.main.temp;
        const weatherCondition = data.weather[0].main;
        const cityName = data.name;
        const fiveDaysForecast = await fiveDaysWeatherForecast(cityInput);

        return { temp, weatherCondition, cityName, fiveDaysForecast };
    } catch (e) {
        console.log(e);
        const err = document.getElementById('err-cont');
        err.style.display = 'block';
        err.innerHTML = e.message;
        throw new Error('City not found');
    }
};

const sbtBtn = document.getElementById('sbt-btn');
sbtBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const cityInput = document.getElementById('cityInput');
        const { temp, weatherCondition, cityName, fiveDaysForecast } = await getWeatherDetail(cityInput.value);
        const temperatureElement = document.getElementById('temp');
        temperatureElement.innerHTML = `<b>Temperature:</b> ${temp}°C`;
        const cityNameElement = document.getElementById('cityName');
        cityNameElement.innerHTML = `<b>City:</b> ${cityName}`;
        const weatherConditionElement = document.getElementById('weatherCond');
        weatherConditionElement.innerHTML = `<b>Weather Condition:</b> ${weatherCondition}`;
        document.getElementById('weatherCard').style.display = 'block';
        const forecastElem = document.getElementById('forecastDetails');
        const removedCommas = fiveDaysForecast.toString().replace(/,/g, '');
        forecastElem.innerHTML = removedCommas;
        document.getElementById('forecastContainer').style.display = 'block';
    } catch (e) {
        console.log(e);
        const err = document.getElementById('error');
        err.style.display = 'block';
        err.innerHTML = e.message;
    }
});

async function fiveDaysWeatherForecast(cityInput) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=""&units=metric`
        const response = await fetch(url);
        const data = await response.json();
        const fiveDaysData = getFiveDaysWeather(data);
        return fiveDaysData;
    } catch (e) {
        console.log(e);
    }
}

// Function to convert Unix timestamp to date string (YYYY-MM-DD)
function convertUnixToDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getFiveDaysWeather(data) {
    const weatherData = data.list;
    const dailyTemps = {};
    const dailyConditions = {};

    weatherData.forEach(entry => {
        const date = convertUnixToDate(entry.dt);
        if (!dailyTemps[date]) {
            dailyTemps[date] = [];
            dailyConditions[date] = new Set();
        }
        dailyTemps[date].push(entry.main.temp);
        dailyConditions[date].add(entry.weather[0].main);
    });

    const fiveDaysData = Object.keys(dailyTemps).slice(0, 6).map(date => {
        const temps = dailyTemps[date];
        const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
        const conditions = Array.from(dailyConditions[date]);
        return {
            date: date,
            avgTemp: avgTemp.toFixed(2),
            conditions: conditions
        };
    });

    return makeList(fiveDaysData);
}

async function makeList(data) {
    let forecastList = [];
    data.forEach((item) => {
        let elem = `<div class="col-md-2 p-2">
                    <div class="card">
                    <div class="card-body">
        <h5><b>Date:</b> ${item.date}</h5>
        <p><b>Average Temperature:</b> ${item.avgTemp}°C</p>
        <p><b>Weather Condition:</b> ${item.conditions[0]}</p>
        </div>
        </div>
      </div>`
        forecastList.push(elem);
    });
    return forecastList;
}
