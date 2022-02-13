import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Index from "../index"

function Card({product}) {
  const navigate = useNavigate();
  console.log('Card.js')
  const { id, title, image, description } = product || {};

  const handleClick = () => {
    navigate('/product/'+id);
  }

  return (
    <div onClick={handleClick}>
      <div className="card" style={{ width: '15rem' }}>
        <img src={image} className="card-img-top" alt="..." style={{height: '282px'}} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 19)}</h5>
          <p className="card-text">{description.slice(0, 45)}</p>
          <button href="#" className="btn btn-sm btn-dark">
           🤍 WISHLIST 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
