import React from 'react'
import './footer.css'

const Footer = () =>{
    return(
        <div className='footer tc'>
            <p className='footer-description-top footer-text '>
              This is just an React and Node/Express Js project application 
            </p>
            <p className='author description-footer-bottom footer-text '>
              Created: 05 may 2020 by <span className='author-name'>Mihai Vatulescu</span>
            </p>
          </div>
    );
}

export default Footer;
