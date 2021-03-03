import React from 'react'
import {ProductConsumer } from '../../context'
import {Link} from 'react-router-dom'
import './phoneDetailsPage.css'

class ProductDetailsPage extends React.Component{
   render(){
     return(
       <ProductConsumer>
         {(value)=>{
           const {id, url, brand, model,screenSize,ram,storage,os,camera,battery,price,inCart,description } = value.productDetail;
           return(
             <div className='page-container w-100'>
              <div className='page-title'>
               <div className='title-container'>
                <p className='title'>
                 {brand}
                </p>
                <p className='title'>
                 {model}
                </p>
               </div>
              </div>
              {/* informations about product */}
              <div className='page-info'>
                {/* top description refers to product picture and main properties */}
               <div className='top-description'>
                 {/*image container  */}
                <div className='image-container'>
                 <img 
                  alt='productImg' 
                  className='image' 
                  src={url}
                 />
                </div>
                {/* text container */}
                <div className='properties-container'>
                 <ul>
                  <li>
                    <p className='list-item'>
                    Screen size: {screenSize} inch
                    </p>
                  </li>
                  <li>
                    <p className='list-item'>
                    Ram memory: {ram} gb
                    </p>
                  </li>
                  <li>
                    <p className='list-item'>
                    Storage {storage} gb
                    </p>
                  </li>
                  <li>
                    <p className='list-item'>
                    Operating System: {os}
                    </p>
                  </li>
                  <li>
                    <p className='list-item'>
                    Camera: {camera} mpx
                    </p>
                  </li>
                  <li>
                    <p className='list-item'>
                    Battery: {battery} mAh
                    </p>
                  </li>
                  <li>
                    <p className='price-txt'>
                      Price: {price}
                    </p>
                  </li>
                 </ul>
                 {/* add two buttons (back to products) and (add to cart) */}
                 <div className='buttons-container'>
                  <Link to='/products/'>
                    <button className='btn-style'>
                      Back to products
                    </button> 
                  </Link>              
                  <button 
                   className='btn-style'
                   disabled={inCart ? true : false}
                   onClick={()=>{
                    //addToCart represents a value object property passed from ProductConsumer component 
                    value.addToCart(id)
                   }}
                  >
                    {inCart ? 'Added to cart' : 'Add to cart'}
                  </button>
                 </div>
                </div>
               </div>
               <div className='bottom-description mb5 '>
                <p className='more-details'>
                 {description} 
                </p>
               </div>
               {/* create a section here when a user can order the selected product */}
               <div className='order-section'>
                 {/*add input text fields for user details and order button (must be continued)
                    after a brodust is ordered the product data/details will be added to ordered products list(cart)
                    to see ordered products
                   */}
                 {/*try to use mongo db database in this project  */}
               </div>
              </div>
             </div>
           )
          }
         }
       </ProductConsumer>
     )
   } 
}

export default ProductDetailsPage;
