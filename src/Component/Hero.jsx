import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
        <main className='hero container'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE`RE HERE TO HELP WITH OUR SHOES.  </p>
                <div className="hero-btn">
                <Link to='/shop'><button>SHOP NOW</button></Link>

                <Link to='/categories'>
                    <button className='secondary-button'>CATEGORIES</button>
                    </Link>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="shop-icon">
                        <img src="./images/amazon.png" alt="amazon" />
                        <img src="./images/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src="./images/hero-image.png" alt="hero-img" />
            </div>
        </main>
    </div>
  )
}

export default Hero