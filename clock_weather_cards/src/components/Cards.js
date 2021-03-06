import React from 'react'
import Card from './Card'
import './cards.css'

const Cards = () => {
  let denver = ["America/Denver", "Denver", ["39.7", "-104"]]
  let frankfurt = ["Europe/Berlin", "Frankfurt", ["50", "8.3"]]
  let paris = ["Europe/Amsterdam", "Amsterdam", ["52", "4.9"]]
  let dublin = 	["Europe/Dublin", "Dublin", ["53", "-6"]]
  /* let batumi = ["Asia/Tbilisi", "Batumi", ["41.6", "41.6"]]
  let venezuela = ["America/Caracas", "Venezuela", ["7.6", "-65.8"]]
  let buenosAires = ["America/Argentina/Buenos_Aires", "Buenos Aires", ["-34.6", "-58"]] */
  //Llanfairpwllgwyngyll
  

  return (
    <div className="cards">
      <Card timezone={denver[0]} city={denver[1]} coord={denver[2]} />
      <Card timezone={frankfurt[0]} city={frankfurt[1]} coord={frankfurt[2]} />
      <div className="break"></div>
      <Card timezone={paris[0]} city={paris[1]} coord={paris[2]} />
      <Card timezone={dublin[0]} city={dublin[1]} coord={dublin[2]} />
    </div>
  )
}

export default Cards