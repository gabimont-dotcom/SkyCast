// Your OpenWeatherMap API key
const apiKey = "d6965e09fdc28804c979ac08e699e632";

// Function to fetch weather data for a given city
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error(error);
            alert("City not found or error fetching data");
        });
}

// Function to display weather data in the page
function displayWeather(data) {
    const weatherDiv = document.getElementById("weatherResult");

    weatherDiv.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Conditions: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
    `;
}

// Event listener for the search button
document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city !== "") {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

// Optional: allow pressing Enter to search
document.getElementById("cityInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = document.getElementById("cityInput").value.trim();
        if (city !== "") {
            getWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    }
});
