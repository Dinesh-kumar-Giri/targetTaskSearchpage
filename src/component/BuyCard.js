import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BuyCard = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(()=>{
    axios.get(`http://localhost:5000/getProduct/`+id)
    .then(res => {
       console.log('ddddd',res.data);
       setProduct(res.data);

    })
  }, [id]);
  const {title, description, price, image} = product || {};
  console.log(title, description, price, image);

  console.log('PARAMS, id', id);
  return (
    <div className=" my-4 mx-5 ">
      <div className="row ">
        <div className="col-md-4">
          <div className="card  " style={{ width: '18rem' }}>
            <img
              src={image}
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <hr />

            <p className="card-text">
              <small className="text-muted">productPrice:Rs.{price}</small>
            </p>
            <button className="btn btn-sm btn-dark">🤍 WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyCard;
