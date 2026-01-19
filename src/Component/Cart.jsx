import React from 'react'

const Cart = (props) => {

    const addToCart = ()=>{
        // console.log(props.id);
        // localStorage.clear()
        const cart = JSON.parse(localStorage.getItem('carts'))|| [];
        cart.push(props.value)

        localStorage.setItem('carts',JSON.stringify(cart));

        // console.log(localStorage);
        console.log(cart);
    }

  return (
    <div>
            <button className='btn-cart'
            onClick={addToCart}
            >🛒  Add to card</button>

    </div>
  )
}

export default Cart