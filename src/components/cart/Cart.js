import React from 'react'
import './cart.css'
import Empty from '../empty cart/Empty.js'
//import ProductConsumer from src folder
import { ProductConsumer } from '../../context'
import CartProductsList from '../cart products list/CartProductsList'
import CartTotal from '../cart total/CartTotal'

const Cart = () =>{
  return(
    <ProductConsumer>
      {
       //define an anonimous function 
       (value) =>{
         //value.cart -> array with ordered products

        //determine if the cart is empty or not:
        if(value.cart.length === 0){
          return <Empty/>;
        } else {
        return(
         <div className='cart-container'>
          <div className='title'>
           <h2 className='cart-title'>
             Your <span>Cart</span> 
           </h2>
          </div>
          <div className='products-section'>
           <div className='products'>
            {/* pass value object as a prop to cart products list */}
            <CartProductsList value={value}/>
            <CartTotal value={value}/>
           </div>
          </div>
         </div>
        )
       }}
      }
    </ProductConsumer>
  )
}

export default Cart;
