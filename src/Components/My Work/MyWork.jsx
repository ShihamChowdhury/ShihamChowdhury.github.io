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
      <h2>Temperature-Controlled Fan</h2>
      <img src="Temperature Sensor.png" height={500} width={500} alt="" />
      </div>
      <div className="mywork-description">
        <p>An Arduino-based device that uses the DHT11 temperature sensor to record the temperature and humidity, which is then shown on the LCD display. If the temperature/humidity reaches a certain threshold, the DC motor fan will power on and stay running until the temperature drops again. If the ultrasonic sensor detects an object getting too close to the fan, the fan will immediately turn off until the object is within a safe distance. </p>
      </div>
      <div className="mywork-showmore" onClick={(event) => {event.preventDefault(); window.open('https://github.com/ShihamChowdhury/Temperature-Controlled-Fan')}}>
        <p>Learn More</p>
         <img src={arrow_icon} alt=""/>
    </div>
    <div className="mywork-container">
      <h3>Word Occurence Prediction Algorithm</h3>
      <img src="MachineLearning.jpg" height={500} width={500} alt="" />
      </div>
      <div className="mywork-description">
        <p>An algorithm built in C++ that uses the principles of machine learning and natural language processing to learn the language of a sample of online posts and predict the chance of any given word appearing. Individual words and the topics they appear under are initialized as pair types and then organized in binary search trees, which are parsed recursively to compute the log-probabilty score of any given word appearing in an online post. </p>
      </div>
      <div className="mywork-showmore" onClick={(event) => {event.preventDefault(); window.open('https://github.com/ShihamChowdhury/Word-Occurence-Prediction-Algorithm')}}>
        <p>Learn More</p>
         <img src={arrow_icon} alt=""/>
    </div>
    <div className="mywork-container">
      <h4>Euchre Game</h4>
      <img src="Euchre.jpg" height={500} width={500} alt="" />
      </div>
      <div className="mywork-description">
        <p>A playable game of Euchre in C++ that supports up to 4 human players. For each human player, a HumanPlayer class is initialized that takes user input, and the remaining players are initialized as SimplePlayer classes which simulate CPU players. CPU players are programmed to make the best decision based on the current game state, and game logic is implemented to both enforce the game's rules and optimize gameplay flow. </p>
      </div>
      <div className="mywork-showmore" onClick={(event) => {event.preventDefault(); window.open('https://github.com/ShihamChowdhury/Euchre-Game')}}>
        <p>Learn More</p>
         <img src={arrow_icon} alt=""/>
    </div>
    <div className="mywork-container">
      <h5>Image Resizer</h5>
      <img src="ImageResize.png" height={500} width={500} alt="" />
      </div>
      <div className="mywork-description">
        <p>An image editor in C++ that allows the user to rotate, resize, delete a row or column of pixels from image, and more. Using a defined Pixel class, the inputted image is initialized as an array of Pixels. From there, pointers are used to locate and edit individual Pixels as per user input or delete the entire row/column of a given Pixel. Calculations for cost matrices for a given image are also included to determine seams - paths of least importance - to be automatically removed when resizing an image to different dimensions.</p>
      </div>
      <div className="mywork-showmore" onClick={(event) => {event.preventDefault(); window.open('https://github.com/ShihamChowdhury/Image-Resizer')}}>
        <p>Learn More</p>
         <img src={arrow_icon} alt=""/>
    </div>
    </div>
  )
}

export default MyWork
