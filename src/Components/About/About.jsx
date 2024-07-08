import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT TINDOG</h3>
        <h2>Where Paws and People Meet.</h2>
        <p>Tindog is your go-to platform for connecting with fellow dog enthusiasts in your area. Whether you're looking for playdates, walking buddies, or just want to share adorable dog photos, Tindog brings dog lovers together in a friendly and engaging community</p>
        <p>Finding the right companion for your furry friend has never been easier. With Tindog's user-friendly interface, you can browse profiles of nearby dogs, swipe to match, and arrange meet-ups. Your dog will enjoy socializing and making new friends while you build lasting connections with other pet owners.</p>
        <p>Tindog isn't just about socializing; it's also a platform for adoption and support. Explore profiles of dogs in need of loving homes, share your own dog's moments, and get advice from a community of dog lovers. Join Tindog today and celebrate the joy of canine companionship.</p>
      </div>
    </div>
  )
}

export default About
