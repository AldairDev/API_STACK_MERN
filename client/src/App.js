import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './components/productList/productList.css'
import './App.css';
import Nav from './components/Nav/nav';
import Category from './components/CategoryList/categoryList'
// import Products from './components/productList/productList'
import Categories from './components/Categories/Categories';


function App() {
  return (

    <Router className="App">
      
      <Route path="/" component={Nav} />
        <main className="main-container">
          <Route path="/" component={Category} />
          {/* <Route path="/" component={Products} /> */}
          <Route path="/:id" component={Categories} />
        </main>

    </Router>
  );
}

export default App;
