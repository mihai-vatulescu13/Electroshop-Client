import React from 'react'
import './cartProductsList.css'
import CartProduct from '../cart product/CartProduct'
import UserSubmit from '../user submit/UserSubmit'

//this given prop as parameter represents an object
const CartProductsList = ({value}) =>{

   //destructure the value object
   const {cart} = value;

   // console.log('cart value from cart list component',cart)
    return (
        <div className='products-cart-list'>
          {
             cart.map(product =>{
              return(
               <CartProduct 
                //product key(unique) by id
                key={product.id}
                product={product} 
                value={value}
               />
              )
             }) 
          }  

          {/* section for user/owner data(that will be sended to the server)
          (f_name,l_name,Email_adress,house_adress,postal_code,phone_num)
           */}
           {/* pass value object as parameter to userSubmit component */}
          <UserSubmit value={value}/>

        </div>
    )
}

export default CartProductsList;
