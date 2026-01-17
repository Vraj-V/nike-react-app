import React from 'react'

const Location = () => {
  return (
    <div className='container'>
        <div className='margin location-hero'>
            <h1 > TEXAS STORE</h1>

            <div className="location-image flex">
                <img src="https://img.freepik.com/premium-photo/interactive-map-find-nearby-nike-stores-shopping_1036975-150463.jpg" alt="map" />
                {/* <img src="./images/store.png" alt="map" /> */}
            </div>

            <div className="address">
                <div className="address-info">
                    
                <h3>Store Information:</h3>
                <p>221 Maplewood Lane, 
                Near Lakeside Park,
                Springfield Heights,
                Austin, Texas 78745, USA</p>
                </div>
                <div className="address-contact">
                    <h4>Support Care: <br /> customercare@nike.com
                    </h4>
                    <p>Contact No: +01 725 2112</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location