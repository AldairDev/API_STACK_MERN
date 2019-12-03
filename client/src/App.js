import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/productList/productList.css'
import './App.css';
import Nav from './components/Nav/nav';
import Category from './components/CategoryList/categoryList'
import Products from './components/productList/productList'
import Categories from './components/Categories/Categories';
import Signin from './components/Login/signin';
import Signup from './components/Login/signup';
function App() {
  return (

    <Router className="App">
      
      <Route path="/" component={Nav} />
        <main className="main-container">
          <Route exact path="/" component={Category} />
          <Route exact path="/" component={Products} />
          <Route path="/phone" component={Categories} />
          <Route path="/electrodomesticos" component={Categories} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </main>

    </Router>
  );
}

export default App;
