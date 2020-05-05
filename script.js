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
      <p>The current weather is ${JSON.stringify(city.weather[0].main)}
      `
    })
})
// Get Element of text box

// Make user input populate in API call



