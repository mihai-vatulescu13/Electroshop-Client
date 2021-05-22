//products list page component
import React from 'react'
import {ProductConsumer} from '../../context'
import './phoneslist.css'

//import our projects data
import PhoneCard from '../phone card/PhoneCard.js'
import { Link } from 'react-router-dom'


//here we store our products
class PhonesList extends React.Component{
 
  render(){
    return(
        <div className='phones-list-container'>
          
          <h2 className='description tc pa3 ma0'>
            Choose your favourite product the from list below! 
          </h2>
         
          <h2 className='prod-desc tc'>
            Click on product picture to see more details.
          </h2>

          <div className='row products-container'>
           <div className='products'>
            <ProductConsumer>
                {(value)=>{
                  return value.products.map(product =>{
                    return <PhoneCard key={product.id} product={product}/>
                  })
                }
                }
            </ProductConsumer>
           </div>
          </div>
        </div>
    );
  }
}

export default PhonesList;
