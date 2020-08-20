import React, {useState, useEffect} from 'react'

const Weather = ({coord}) => {
  let key = process.env.REACT_APP_API_KEY
  let url = `https://api.climacell.co/v3/weather/realtime?lat=${coord[0]}&lon=${coord[1]}&unit_system=us&fields=weather_code%2Cmoon_phase%2Ctemp&apikey=${key}`

  const [weather, setWeather] = useState()
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)

        if (response.status === 200) {
          const data = await response.json()
          setWeather(data)
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    }

    if(!fetched){
      fetchData()
      setFetched(true)
    } else {
      setInterval(fetchData, 3600000)
    }
  // eslint-disable-next-line
  }, [fetched])

  const getDetails = (code) => {
    const images = require.context('../assets/icons', true)
    let url = ''
    let text = ''

    switch (true) {
      case ['mostly_clear', 'clear'].includes(code):
        url = './sun.png'
        text = 'Clear Sky'
        break
      case ['cloudy', 'mostly_cloudy'].includes(code):
        url = './clouds.png'
        text = 'Cloudy'
        break
      case code === 'partly_cloudy':
        url = './partly-cloudy.png'
        text = 'Partly Cloudy'
        break
      case ['fog_light', 'fog'].includes(code):
        url = './haze.png'
        text = 'Fog'
        break
      case ['rain_heavy', 'rain'].includes(code):
        url = './rain.png'
        text = 'Rain'
        break
      case ['rain_light', 'drizzle'].includes(code):
        url = './rain-cloud.png'
        text = 'Light Rain'
        break
      case code === 'tstorm':
        url = './storm.png'
        text = 'Thunderstorm'
        break
      case ['snow_heavy', 'snow'].includes(code):
        url = './snow.png'
        text = 'Snow'
        break
      case ['snow_light', 'flurries'].includes(code):
        url = './light-snow.png'
        text = 'Light Snow'
        break
      case [
        'freezing_rain_heavy', 'freezing_rain', 'freezing_rain_light', 'freezing_drizzle', 
        'ice_pellets_heavy', 'ice_pellets', 'ice_pellets_light'
      ].includes(code):
        url = './hail.png'
        text = 'Hail'
        break
      default:
        console.log('Error: Missing weather code')
        break
    }
  
    return {
      img: images(url),
      text: text
    }
  }

  const getMoon = (code) => {
    const images = require.context('../assets/icons', true)
    let url = ''

    switch (code) {
      case 'new':
        url = './new-moon.png'
        break
      case 'waxing_crescent':
        url = './waxing-crescent.png'
        break
      case 'first_quarter':
        url = './first-quarter.png'
        break
      case 'waxing_gibbous':
        url = './waxing-gibbous.png'
        break
      case 'full':
        url = './full-moon.png'
        break
      case 'waning_gibbous':
        url = './waning-gibbous.png'
        break
      case 'last_quarter':
        url = './last-quarter.png'
        break
      case 'waning_crescent':
        url = './waning-crescent.png'
        break
      default:
        console.log('Error: Missing moon phase code')
        break
    }
  
    return images(url)
  }

  return (
    <div>
      {weather 
       ? <>
          <img className="icon" alt={weather.weather_code.value} src={getDetails(weather.weather_code.value).img}/>
          <img className="moon" alt={weather.moon_phase.value} src={getMoon(weather.moon_phase.value)}/>
          <span className="weather-desc">{getDetails(weather.weather_code.value).text}</span>
          <p className="temp">{weather.temp.value} °{weather.temp.units}</p>
         </>
       : <p>loading...</p>}
    </div>
  )
}

export default Weather