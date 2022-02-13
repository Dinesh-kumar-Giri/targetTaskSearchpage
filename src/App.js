import React, { Component } from 'react';
import BuyCard from './component/BuyCard';
import Navbar from './component/Navbar';
import SuperCard from './component/SuperCard';
const App =()=>{
  return (
    <>
      <Navbar/>
      {/* <SuperCard/> */}
      <BuyCard/>
    </>
  )
}
export default App;