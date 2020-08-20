import React from 'react'
import Clock from './Clock'
import Weather from './Weather'
import './card.css'

const Card = ({timezone, city, coord}) => {
  return (
    <div className="card">
      <Clock timezone={timezone} city={city} />
      <Weather coord={coord} />
    </div>
  )
}

export default Card