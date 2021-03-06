import React from 'react'

import Sort from './components/Sort'
import Filter from './components/filter'
import Header from './components/Header'
import ProductListWrapper from './components/ProductListWrapper'
import Basket from './components/Basket'
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="sidebar">
          <Sort />
          <Filter />
          <Filter />
        </div>
        <ProductListWrapper />
        <Basket />
      </>
    </div>
  );
}

export default App;
