import React from 'react'
import Cart from './Cart'

const ShopCard = (props) => {
  return (
    <div>
        <div className='container margin card'>
        <div className='shoe-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='shoe-content'>
           <h2>{props.name}</h2>
            <p className='price'>Price: <span>{props.price}</span></p>
            <p className='discount'>Discount Price: <span>{props.discountPrice}</span> </p>
        </div>
        <div className='cart'>
      <Cart value={props.id} />
        </div>
        </div>
    </div>
  )
}

export default ShopCard