let userInput = document.getElementById('cityName')

document.getElementById('searchBtn').addEventListener('click', (event) => {
  event.preventDefault()
  let userCity = userInput.value
  console.log(userCity)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=ab6befe1c9af034685fd382848930939`)
    .then(r => r.json())
    .then(city => {
      console.log(city)
      document.getElementById('weatherDisplay').innerHTML = `
      <h1>${city.name}</h1>
      <p>The current weather is ${JSON.stringify(city.weather[0].main)}</p>
      <p>The current temperture is ${Math.round(((city.main.temp-273.15)*1.8)+32)}°f with a high of ${Math.round(((city.main.temp_max-273.15)*1.8)+32)}°f and a low of ${Math.round(((city.main.temp_min-273.15)*1.8)+32)}°f.</p>
      `
    })
    document.getElementById('cityName').value = ''
})




