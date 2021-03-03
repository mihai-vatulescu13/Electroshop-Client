import React from 'react'
import logo from './gadgetLogo.png'
import {Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends React.Component{

  render(){
    return(
      <div className='nav-container '>
        {/*title container  */}
        <div className='title-and-logo'>
         <div className='title-container'>
          <div>
            <Link to='/'>
             <img className='page-logo ' src={logo} alt='logo'></img>
            </Link>
          </div>
          <div className='title'> 
            <span className='title-span'>e</span>lectro<span className='title-span'>S</span>tore
          </div>
         </div>
        </div>
        
        {/* navigation links container: */}
        <div className='links-container'>
          <div className='nav-buttons'>
            {/* navbar pages links */}
            <p className='link'>
              <Link to='/' className='link-text' >
                Home 
              </Link>
            </p>
            <p className='link'>
              <Link to='/products/' className='link-text' >
                Products
              </Link>
            </p>
            <p className='link'>
              <Link to='/cart/' className='link-text'>
                Your cart
              </Link> 
            </p>
          </div>
        </div>

      </div>
   )
  }
}

export default Navbar;

