import React from 'react'
import Button from './Button'
import "../styles/Hero.scss"

function Hero() {
  return (
    <section className='hero-section'>
        <div className="container">
            <h1>Power up with coffee</h1>
            <h3>Start your exciting day with a cup of Brew Coffee</h3>
            <Button text="Explore Us" />
        </div>
    </section>
  )
}

export default Hero