import React from 'react'
import './cartProduct.css'

// cart product details
const CartProduct = ({product,value}) =>{
    const {id,url,brand,model,price,count,total} = product;
    const {incrementCart, decrementCart, removeFromCart} = value;
    
    return (
      <div className='product-card'>
       <div className='description-img'>
         <img 
          className='prod-img' 
          alt='product-image'
          src={url}
          />  
       </div>   
       <div className='description-text'>
        <p className='main-text'>
          {brand} {model}  
        </p>
        <h3 className='second-text'>
          Price: {price}
        </h3>
       </div>
       
       <div className='remove-section'>
        <button 
         className='remove-btn'
         onClick={()=>removeFromCart(id)}
        >
         Remove from cart
        </button>
       </div>
      </div>
    )
}

export default CartProduct;
