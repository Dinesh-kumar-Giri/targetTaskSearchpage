import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Testing from './Testing';
// import BuyCard from './BuyCard';


function SuperCard({products,setProducts}) {
  console.log('SuperCard');
  

  useEffect( () => {
    axios.get(`http://localhost:5000/getProduct`)
    .then(res => {
       console.log('coming----',res.data);
       setProducts(res.data);
    })
    
  }, []);

  return (
    <div className="container my-3 ">
       {/* <Testing/> */}
      <div className="row">
        {products.length>0?
        products.map((product) => {
          return (
            < div className="col-md-4 my-2  ">
              <Card
                 product={product}
              />
                
            </div>
            
          );
        }): <div>Sorry this Product is not available :)  </div> }
    

      </div>
     
    </div>
  );
}

export default SuperCard;
