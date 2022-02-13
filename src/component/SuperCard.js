import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
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
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4 my-2  ">
<<<<<<< HEAD
              <Card product={product} />
=======
              <Card
                title={element.title.slice(0, 18)}
                // ImageDescrition={element.description.slice(0, 65)}
                ImageUrl={element.image}
              />
>>>>>>> 892d64f56114ab2ee14cfc75792ae02489f073d1
                
            </div>
            
          );
        })}
    

      </div>
    </div>
  );
}

export default SuperCard;
