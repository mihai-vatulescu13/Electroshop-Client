import React from 'react';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import PhonesList from './components/phones list/PhonesList.js'
import Cart from './components/cart/Cart.js'
import PhoneDetailsPage from './components/phone details page/PhoneDetailsPage.js'
import './App.css';


class App extends React.Component {
  render(){
    return (
      // <React.Fragment>
      <div className="App"> 
        <Navbar/>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/products/' component={PhonesList}/>
          <Route exact path ='/cart/' component={Cart}/>
          {/*products details route: */}
          <Route exact path ='/details/' component={PhoneDetailsPage}/>
        </Switch>
      </div>
      // </React.Fragment>
    );
  }
}

export default App;
