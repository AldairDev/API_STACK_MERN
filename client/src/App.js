import React from 'react';
import './App.css';
import Nav from './components/Nav/nav';
import Category from './components/Category/category'
import Products from './components/productList/productList'
function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main-container">
        <Category />
        <Products />
      </main>

    </div>
  );
}

export default App;
