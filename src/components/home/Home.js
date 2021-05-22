import React from 'react'
import shippLogo from '../assets/shippingLogo.png'
import guarantLogo from '../assets/guaranteeLogo.png'
import returnlogo from '../assets/returnLogo.png'
import buyimg from '../assets/buyImage.png'
import imgdesc from '../assets/mobileImg.jpeg'
import searchIcon from '../assets/searchIcon.png'
import './home.css'


const Home = () =>{
    return(
        <div className='container'>
          <div className='top-description'>
           <div className='description-container'>
             <h1 className='main-page-description'>
              Welcome to ElectroStore!  
             </h1> 
             <h3 className='sub-description'>
              Pricings starting at 350, look down for more details
             </h3>
           </div>
           <div className='center-items'>
            <div className='image'>
             <img 
              className='desc-image' 
              src={buyimg}
              alt=''
             > 
             </img>
            </div>    
           </div> 
          </div>  

            {/*Add offer description here:(this is an section)  */}
            <div className='services-desc-container'>
              <h1 className='desc-title'>
                Available Services:
              </h1>
              <div className='services-container '>
               <div className='available-services-container center-items'>
                {/* wifi container description service */}
                <div className='services-card '>
                  <div className='service-icon'>
                   <img
                    className='service-logo service-elem-desc' 
                    src={shippLogo} 
                    alt='wifi-logo'
                    >
                   </img>
                  </div>
                  <div className='center-items'>
                   <div className='service-description '>
                    <h4 className='service-text service-text-group service-elem-desc'>
                     Free shipping for price bigger than 200  
                    </h4>
                   </div>
                  </div>
                </div>

                {/* bus container desc service */}
                <div className='services-card'>
                  <div className='service-icon'>
                   <img
                    className='service-logo service-elem-desc' 
                    src={guarantLogo} 
                    alt='wifi-logo'
                    >
                   </img>
                  </div>
                  <div className='center-items'>
                   <div className='service-description'>
                    <h4 className='service-text service-text-group service-elem-desc'>
                     Guarantee included for our all products  
                    </h4> 
                   </div>
                  </div>
                </div>

                {/* meal container desc service */}
                <div className='services-card '>
                  <div className='service-icon'>
                   <img
                    className='service-logo service-elem-desc' 
                    src={returnlogo} 
                    alt='wifi-logo'
                   >
                   </img>
                  </div>
                  <div className='center-items'>
                   <div className='service-description'>
                    <h4 className='service-text service-text-group service-elem-desc'>
                     Return the product and bring money back in term of 30 days 
                    </h4>
                   </div>
                  </div>
                </div>
               </div> 
              </div> 
            </div>

            <div className='explore-offers center-items'>
             <div className='explore-text-and-icon center-items'>
              <img 
               src={searchIcon} 
               alt='search icon' 
               className='search-icon'
              /> 
              <h3 className='explore-offers-text'>
               Explore our offers!  
              </h3>
             </div>
            </div>

            <div className='center-items'>
              <div className='image'>
               <img 
                className='desc-image' 
                src={imgdesc}
                alt=''
                > 
               </img>
              </div>    
            </div>
            
      {/*Add footer section here(maybe later)  */}
      <footer className='center-items'>
       <div className='footer-text'>
        <p>
         Author: Mihai Vatulescu 
        </p>
        <p>
         Date Created: 09.09.2020
        </p>  
       </div>
      </footer>    
     </div>
    )
}

export default Home;

