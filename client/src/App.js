import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/productList/productList.css'
import './App.css';
import Nav from './components/Nav/nav';
import Category from './components/CategoryList/categoryList'
import Products from './components/productList/productList'
import Categories from './components/Categories/Categories';
import Signin from './components/Login/signin';
import Signup from './components/Login/signup';

function App() {

  // const [error, setError] = useState(null);
  
  // function showError(mensaje){
  //   setError(mensaje);
  // }

  // const hiddenError = () =>{
  //   setError(null)
  // }

  return (

    <Router className="App">
      
      <Route path="/" component={Nav} />
      
      <Switch>
        <main className="main-container">
          {/* <Error showError = { error } hiddenError = { hiddenError } /> */}

          <Route path="/" component={Category} />
          <Route exact path="/" component={Products} />
          <Route path="/phone" component={Categories} />
          <Route path="/electrodomesticos" component={Categories} />
          <Route path="/signin"

          render={props => (
          <Signin {...props} />
        )}/>

          <Route path="/signup" component={ Signup } />
        </main>
        </Switch>

    </Router>
  );
}

export default App;
