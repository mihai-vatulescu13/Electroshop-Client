import React from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'
import cart1 from '../../cartLogo1.png'
import cart2 from '../../cartLogo2.png'
import './phoneCard.css'
import PropTypes from 'prop-types'

//product card
//this component represents page with products from the store
const PhoneCard = (props) =>{

    // destructuring(grabbing the props that comes from PhonesList component)
    const {id, url, brand, model, price, inCart} = props.product; 
    
    const buttonStyle={
      backgroundColor:'rgb(25,169,116)',
      fontWeight:'200',
      fontSize:'20px',
      color:'white',
      paddingLeft:'15px',
      paddingRight:'15px',
      paddingTop:'8px',
      paddingBottom:'8px',
      marginTop:'10px',
      cursor:'pointer',
     }


    return(
    <ProductConsumer>
     {(value) => {
      return ( 
       <div className="card ba b--green dib pa4 ma3 pl1 pr1 card-container"> 

       {/* product image: */}
       <div 
         className='image-container'
         onClick={()=>{
           value.handleDetail(id)
         }}   
         >
         <Link to='/details'>
           <img 
             alt="products"
             className='picture-product ' 
             src={url}>
           </img>
         </Link>
       </div>
       {/* product description: */}
       <div className='tc desc-container '>
         <h2 className="card-text ">{brand} {model}</h2>
         <h2 className="card-text price-text">Price: {price}</h2>
       </div>
       {/* product buy button: */}
       <div>
         <button 
           className='tc grow cart-button'
           style={buttonStyle}
           //check if product is or not added in cart
           disabled={inCart ? true:false}
           //create an event function that add the selected item to the card
           onClick={()=>{
            value.addToCart(id) 
 
           }}
           >
           {
             //render product status(added or not to the card) 
             inCart ?
             (<div className='card-footer'>
               <img alt='button-logo1'
                 src={cart1}
                 className='cart-logo'/> 
               <p className='cart-text' disabled >
                 Added to cart
               </p>
               </div>) :
             (<div className='card-footer'>
               <img alt='button-logo2'
                 src={cart2}
                 className='cart-logo'/> 
               <p className='cart-text' disabled >
                 Add to cart
               </p>
             </div>) 
           }
         </button>
      </div>
     </div>
    )}}
    </ProductConsumer>
   )
  }


PhoneCard.propTypes={
 //validating given props by checking object properties types: 
 product: PropTypes.shape({
   id: PropTypes.number,
   url:PropTypes.string,
   brand: PropTypes.string,
   model: PropTypes.string,
   price: PropTypes.number,
   inCart: PropTypes.bool

 }).isRequired
}

export default PhoneCard;
