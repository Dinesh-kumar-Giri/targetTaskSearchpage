import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import BuyCard from './BuyCard';


function SuperCard() {
  console.log('SuperCard');
  const [Information, setInformation] = useState([]);

  useEffect( () => {
    console.log('api data before');
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      const data = res.data;
       console.log(data)
       setInformation(data)

    })
    
  }, []);

  return (
    <div className="container my-3 ">
      <div className="row">
        {Information.map((element) => {
          console.log(element);
          return (
            <div className="col-md-4 my-2  ">
              <Card
                title={element.title.slice(0, 18)}
                // ImageDescrition={element.description.slice(0, 65)}
                ImageUrl={element.image}
              />
                
            </div>
            
          );
        })}
    

      </div>
    </div>
  );
}

export default SuperCard;
