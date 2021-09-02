const apiKey = `635b4dfc4f2a4a5317807fa1513dd279`;

const searchTemperature = () => {
    city = document.getElementById('inputBox').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('cityName', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weatherCondition', temperature.weather[0].main);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}