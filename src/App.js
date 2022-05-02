import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route } from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Home />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element = {<Cart/>} />
        </Routes>
    </>
  );
}

export default App;
