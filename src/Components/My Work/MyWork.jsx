import React from 'react'
import './MyWork.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
      <img src="Temperature Sensor.png" height={500} width={500} alt="" />
      </div>
      <div className="mywork-description">
        <h2>Temperature-Controlled Fan</h2>
        <p>This device uses the DHT11 temperature sensor to record the temperature, which is then shown on the LCD display. If the temperature/humidity is high enough, the DC motor fan will power on. The ultrasonic sensor ensures that if any object comes too close to the fan, it will automatically turn off. </p>
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
         <img src={arrow_icon} alt=""/>
    </div>*/}
    </div>
  )
}

export default MyWork
