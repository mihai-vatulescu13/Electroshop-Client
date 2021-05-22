import React from 'react'
import './userSubmit.css'
import ValidateMessage from '../validate message/ValidateMessage.js'
import {ProductConsumer} from '../../context'


class UserSubmit extends React.Component{
    
  //define a state for userSubmit component and recive prop from constructor:
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      Email_adress: '',
      house_adress: '',
      postal_code: '',
      phone_num: ''
    }
  }
    //user handle data methods:
    nameChange = (event) =>{
      //modify the state
      this.setState({f_name: event.target.value})
    }

    lastNameChange = (event) =>{
      this.setState({l_name: event.target.value})
    }

    emailChange = (event) =>{
      this.setState({Email_adress: event.target.value})
    }

    homeChange = (event) =>{
      this.setState({house_adress: event.target.value})
    }

    postalChange = (event) =>{
      this.setState({postal_code: event.target.value})
    }

    phoneNumChange = (event) =>{
      this.setState({phone_num: event.target.value})
    }


    testServer = () =>{
      //fetch function has by default GET method
      fetch('http://localhost:3020/getUser')
       .then(response => response.json())
       .then(data => console.log(data))
    }

    //method that add an user/owner to the database by senting data to the server
    addUser = () =>{
     const {cartTotal, cartTva} = this.props.value; 
     fetch('https://morning-river-01021.herokuapp.com/user',{
       method:'post',
       headers:{'Content-type':'application/json'},
       body: JSON.stringify({
         f_name: this.state.f_name,
         l_name: this.state.l_name,
         Email_adress: this.state.Email_adress,
         house_adress: this.state.house_adress,
         postal_code: this.state.postal_code,
         phone_num: this.state.phone_num,
         cartTotal: cartTotal,
         cartTva: cartTva
       })
     })
     .then((data) =>data.json())
    }

    //method that send to the server cart products(array of objects):
    addCartProducts = () =>{
     
     fetch('https://morning-river-01021.herokuapp.com/cartProducts',{
      method: 'post',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
       f_name: this.state.f_name,
       productsArr: this.props.value.cart
      })
     })
     .then((data) =>data.json())
    }

    //validate data method for server:
    validateUserData(obj){
      //destructuring:
      const {
        f_name,
        l_name,
        Email_adress,
        postal_code,
        house_adress,
        phone_num 
      } = obj;

      //if the atributes are not empty the data will be send to the server:
      if((f_name === '') ||
         (l_name === '') ||
         (Email_adress === '') ||
         (postal_code === '') ||
         (house_adress === '') ||
         (phone_num === '')
      ){
       return false;
      }else{
       return true;
      }
    }
  
    //important
    //submit button will send data to the server
    onSubmit = () =>{     
     if(this.validateUserData(this.state)){
      this.addUser();
      this.addCartProducts();
     } 
    }

    renderValidateData = () =>{
      const reasonTest = this.validateData()
      return (reasonTest) ? 'Its everything ok' : 'The fields must not be empty'
    }

    //method that validate user data for client -> to check if fields are not empty
    validateData = () =>{
      const {
        f_name,
        l_name,
        Email_adress,
        house_adress,
        postal_code,
        phone_num
      } = this.state;

      let checkEmpty = true;
      if(f_name === '' || l_name === '' 
       || Email_adress === ''
       || house_adress === '' && postal_code === '' 
       || phone_num === ''){
         checkEmpty = false;
       }
      return checkEmpty;
    }

    render(){
      return(
        <ProductConsumer>
          {
            (value)=>{
             const {cartSubTotal,cartTva,cartTotal} = value
             return(
              <div className='owner-data-section'>
              <h1 className='title-desc'>
                Add your owner Data:
              </h1>
              <div className='fields'>
                <label className='field-label'>
                  First name:
                </label>
                <div className='center-field'>
                  <input 
                  type='email'
                  className='input-field'
                  //add here an event handler function
                  onChange={this.nameChange}  
                  />
                </div> 
                
                <label className='field-label'>
                  Last name:
                </label> 
                <div className='center-field'>
                  <input 
                  type='text'
                  className='input-field'
                  //add here an event handler function 
                  onChange={this.lastNameChange} 
                  />
                </div> 
                <label className='field-label'>
                  E-mail adress:
                </label> 
                <div className='center-field'>
                  <input 
                  type='text'
                  className='input-field'
                  //add here an event handler function 
                  onChange={this.emailChange} 
                  />
                </div> 
                <label className='field-label'>
                  Home adress:
                </label> 
                <div className='center-field'>
                  <input 
                  type='text'
                  className='input-field'
                  //add here an event handler function 
                  onChange={this.homeChange} 
                  />
                </div> 
                <label className='field-label'>
                  Postal code:
                </label> 
                <div className='center-field'>
                  <input 
                  type='text'
                  className='input-field'
                  //add here an event handler function
                  onChange={this.postalChange}  
                  />
                </div> 
                <label className='field-label'>
                  Phone number:
                </label> 
                <div className='center-field'>
                  <input 
                  type='text'
                  className='input-field'
                  //add here an event handler function
                  onChange={this.phoneNumChange}  
                  />
                </div> 
              </div>

              {/* show validate status */}
              <ValidateMessage functionReason={this.renderValidateData}/>
              
              <div className='submit'>
                <button
                  type='submit'
                  className='submit-button'
                  onClick={this.onSubmit}
                  >
                  Send command
                </button>
              </div>

            </div> 
             )
            }
          }
        </ProductConsumer>
      )  
    }
}


export default UserSubmit;


