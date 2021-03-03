import React from 'react'
import './cartTotal.css'

//in this component value obj is passed as a property
const CartTotal = ({value}) =>{
 const {cartSubTotal, cartTotal ,clearCart,cartTva } = value;

 return(
    <div className='container'>
      <p className='total-description'>
       The final price that you pay:
      </p>  
      <div className='total-status'>
        <h3 className='item'>Subtotal: {cartSubTotal}</h3>
        <h3 className='item'>TVA: {cartTva}</h3> 
        <h3 className='item'>Total: {cartTotal}</h3> 
      </div>
      <button 
       className='clear-cart-btn'
       onClick={clearCart}
       >
        Clear cart
      </button>
    </div>
 )
}

export default CartTotal;
