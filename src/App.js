import React, { useState } from 'react';
import BuyCard from './component/BuyCard';
import Navbar from './component/Navbar';
import SuperCard from './component/SuperCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Router>
        <Navbar setProducts={setProducts}/>
        <Routes>
          <Route path="/" element={<SuperCard products={products} setProducts={setProducts} />} />
          <Route path="/getsingleitem/:id" element={<BuyCard />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
