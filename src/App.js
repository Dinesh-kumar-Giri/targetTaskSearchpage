// import React, { Component } from 'react';
import BuyCard from './component/BuyCard';
import Navbar from './component/Navbar';
import SuperCard from './component/SuperCard';
<<<<<<< HEAD
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
=======
import Testing from './component/Testing';
const App =()=>{
  return (
    <>
      <Navbar/>
      {/* <SuperCard/> */}
      {/* <BuyCard/> */}
      <Testing/>
>>>>>>> 892d64f56114ab2ee14cfc75792ae02489f073d1
    </>
  );
};
export default App;
