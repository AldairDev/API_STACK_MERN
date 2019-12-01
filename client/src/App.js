import React from 'react';
import './App.css';
import Nav from './components/Nav/nav';
import Category from './components/Category/category'
function App() {
  return (
    <div className="App">
      <Nav />
      <main className="main-container">
        <Category />
        <div className="products"> products</div>
      </main>
      
    </div>
  );
}

export default App;
