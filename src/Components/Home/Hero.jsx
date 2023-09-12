import React from 'react'
import './Hero.css'
import gifted from '../Images/Group 52 (2).png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_content'>
            <h1>We Breed and Reward Intellectuals</h1>
            <p>Earn and Learn unlimitedly as a Member...</p>
            <a href="/login"><button className="btn">Get Started</button></a>
        </div>
        <img className='hero_img' src={gifted} alt="" />
    </div>
  )
}

export default Hero