// import React, { Component } from 'react';
import BuyCard from './component/BuyCard';
import Navbar from './component/Navbar';
import SuperCard from './component/SuperCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SuperCard />} />
          <Route path="/product/:id" element={<BuyCard />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
