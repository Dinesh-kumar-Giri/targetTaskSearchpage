import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Testing from './Testing';
// import BuyCard from './BuyCard';


function SuperCard() {
  console.log('SuperCard');
  const [products, setProducts] = useState([]);

  useEffect( () => {
    console.log('api data before');
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
       console.log(res.data);
       setProducts(res.data);

    })
    
  }, []);

  return (
    <div className="container my-3 ">
       <Testing/>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4 my-2  ">
              <Card
                 product={product}
              />
                
            </div>
            
          );
        })}
    

      </div>
     
    </div>
  );
}

export default SuperCard;
