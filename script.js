const api = 'c457022a28680bb765c5c15269f98bed'; //Replace with your API

    const iconImg = document.getElementById('weather-icon');
    const loc = document.querySelector('#location');
    const tempC = document.querySelector('.c');
    const desc = document.querySelector('.desc');
    const weatherButton = document.getElementById('weather-button');
    const weatherData = document.getElementById('weather-data');

    weatherButton.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const long = position.coords.longitude;
          const lat = position.coords.latitude;
          const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

          fetch(base)
            .then((response) => response.json())
            .then((data) => {
              const { temp } = data.main;
              const place = data.name;
              const { description, icon } = data.weather[0];
              const { sunrise, sunset } = data.sys;

              const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
              const fahrenheit = (temp * 9) / 5 + 32;



              iconImg.src = iconUrl;
              loc.textContent = place;
              desc.textContent = description;
              tempC.textContent = `${temp.toFixed(2)} °C`;
            

              weatherData.style.display = 'block';
            });
        });
      }
    });