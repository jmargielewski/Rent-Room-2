import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Cart />
    </div>
  );
}
