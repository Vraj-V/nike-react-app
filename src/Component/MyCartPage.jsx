import React from 'react'

const MyCartPage = () => {

    const myCart = JSON.parse(localStorage.getItem('carts')) || [];
    console.log(myCart);



const deleteItem = (deleteIndex) => {
    const updatedCart = myCart.filter((_, index) => index !== deleteIndex);
    localStorage.setItem('carts', JSON.stringify(updatedCart));
    window.location.reload(); // quick refresh (simple way)
};

const updateQty = (index, newQty) => {
    const updatedCart = myCart.map((item, i) =>
        i === index ? { ...item, qty: Number(newQty) } : item
    );
    localStorage.setItem('carts', JSON.stringify(updatedCart));
    window.location.reload(); // simple version
    };

    const totalPice = myCart.reduce((total,item) =>{
        return total + Number(item.discountPrice) * (item.qty||1);
    },0)


  return (
    <div className='container margin'>
        <div className='myCart-container'>

        {/* rendering the myCart */}
        <div className='product-main'>
        {myCart.map((items,index)=>{
           return (
            <div className='product-items' key={index}>
                <div className='product-img'>
            <img  src={items.image} alt="" />
                </div>
            <div className='product-details '>
                <div className='order-seq between'>
                    <h3>{items.name}</h3>
                    <div className='flex'>
                    <p>Order ID :{10000*(Math.random()).toFixed(2)}</p>
                    <button className='delete-product' onClick={()=> deleteItem(index)} >❌ Delete</button>
                    </div>
                </div>

                <div className='order-detail'>

                <select className='more'
                    value={items.qty}
                    onChange={(e) => updateQty(index, e.target.value)}
                >
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                    <h5 className='product-detail'>{items.name} <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur culpa repellat cum maiores deserunt nemo facilis quasi, perferendis quaerat.</h5>
                    <div>
                    <h4 className='o-price' > Original price <span className='original-price'> {items.price} </span></h4>
                    <h3 className='product-price'> Price --{items.discountPrice * (items.qty ||1)}</h3>

                    </div>
                </div>
            </div>
            </div>
           )
        })}
        </div>
            {myCart.length === 0 ? (
                <div className='noItems'>
                    <h1>Nothing on Cart</h1>
                </div>
            ):(
                <div className='between'>
                <h2>Total: </h2>
                <p className='total-price'> -- {totalPice}</p>
            </div>
            )}
            <div className='order_btn'>
            <button > Order Now...</button>
            </div>
        </div>
    </div>
  )
}

export default MyCartPage