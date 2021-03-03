import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import {ProductProvider} from './context'

ReactDOM.render(
  // product provider means top component in our application
  <ProductProvider>
    <Router>
     <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
