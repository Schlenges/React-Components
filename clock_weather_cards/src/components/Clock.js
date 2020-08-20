import React, {useState, useEffect} from 'react'
import { DateTime } from 'luxon'

const Clock = ({timezone, city}) => {
  let [time, setTime] = useState(DateTime.local().setZone(timezone))

  const _format = (timeString) => timeString.toLocaleString(DateTime.TIME_24_WITH_SECONDS)

  const tick = () => {
    setTime(DateTime.local().setZone(timezone))
  }

  // eslint-disable-next-line
  useEffect(() => {setInterval(tick, 1000)}, [])

  return (
    <div>
      <h2 className="city">{city}</h2>
      <p>{_format(time)}</p>
    </div>
  )
}

export default Clock