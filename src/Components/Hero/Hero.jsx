import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Find Your Perfect Pooch Match on Tindog!</h1>
        <p>Tindog is the ultimate social platform for dog lovers. Whether you're seeking a playmate for your furry friend or looking to adopt a new companion, Tindog connects you with like-minded pet owners and adorable dogs in your area</p>
        <button className='btn' >Scroll for more...</button>
      </div>
    </div>
  )
}



export default Hero
