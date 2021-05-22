import React from 'react'
import {products ,productDetail } from './components/products/products'

//create context -> function
//REact.createContext ->React Context API concept(used to manage state data)
const productContext = React.createContext()

//we use ContextAPI concept to create global variables for out phones products
class ProductProvider extends React.Component{
  state={
    products: [],
    productDetail: productDetail,
    //cart structure
    cart: [], 
    cartSubTotal: 0,
    cartTva: 0,
    cartTotal: 0,
    //user details:
    f_name: '',
    l_name: '',
    Email_adress: '',
    house_adress: '',
    postal_code: '',
    phone_num:'',
    searchField: '',

    
  }

  //lifecycle react method
  componentDidMount(){
    this.setState({products: products})
  }


  //method that return a product(phone) by a specific id
  getItem = (id) =>{
   //return a product with a specific item
   const product = this.state.products.find(item =>{
     return item.id === id
   })
   return product
  }

  //with methods defined below we change the state and manipulate state data and pass down the methods:
  //method that allow us to access each product from the page
  handleDetail = (id) =>{
    const product = this.getItem(id)
    //assign to productDetail object current product object(modify)
    this.setState({productDetail: product})
  }

  //method that allow us to add a product to the cart
  addToCart = (id) =>{
    //create an array with products
    const temporaryProducts = [...this.state.products];
    const index = temporaryProducts.indexOf(this.getItem(id))
    const product = temporaryProducts[index]
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    //2 parameters->two functions: one function to create/fill the cart, second to add/calculate total price 
    this.setState(()=>{
      return {
        products: products,
        cart: [...this.state.cart, product]
      }
    },()=>{
      this.calculateTotal()
      //this.state.cart -> array of ordered items(we need later of this to add to the database)
    })
  }
  
  incrementCart = (id) =>{
    let temporaryCart = [...this.state.cart];
    //return an product by a specific id from the array
    const selctedProd = temporaryCart.find(prodItem => prodItem.id === id)
    //get the index
    const indexProd = temporaryCart.indexOf(selctedProd)
    const product = temporaryCart[indexProd]
    product.count = product.count + 1;
    product.total = product.count * product.price

    //continue this later:
    this.setState({
      cart: [...temporaryCart]
    },()=>{
      this.incrementCart()
    })
  }


  removeFromCart = (id) =>{
   //spread products properties 
   let temporaryProducts = [...this.state.products];
   let temporaryCart = [...this.state.cart];
   temporaryCart = temporaryCart.filter(item =>{
     return item.id !== id;
   })
   //extract index
   const index = temporaryProducts.indexOf(this.getItem(id));
   let removed = temporaryProducts[index];
   //remove from cart by set to false
   removed.inCart = false;
   removed.total = 0;
   removed.count = 0;
  
   this.setState({
     cart: [...temporaryCart],
     products: [...temporaryProducts]
   },()=>{
    this.calculateTotal() 
   })

  }


  clearCart = () =>{
   this.setState({cart: []})
  }


  //create a functon that calculate all products price from cart:
  calculateTotal = () =>{
   let totalSum = 0
   this.state.cart.map((item)=>{ 
     totalSum += item.total
   })
   const tempTva = 2.5
   const total = tempTva + totalSum
  
   this.setState(()=>{
    return {
     cartSubTotal: totalSum,
     cartTva: tempTva,
     cartTotal: total
    }
   })
  }


    render(){
        return(
          //react context->provide all information into our app 
          //value content will be passed to Provider children(s)
          <productContext.Provider value={{
            //pass the app state:
            ...this.state,//state obj contains products and productDetail
            //pass(send) methods to other components
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            incrementCart: this.incrementCart,
            decrementCart: this.decrementCart,
            removeFromCart: this.removeFromCart,
            clearCart: this.clearCart,
            onSearch: this.onSearch
            
          }}>
           
           {this.props.children} 
          </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;


export {ProductProvider , ProductConsumer};
