import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Index from "../index"

function Card({product}) {
  const navigate = useNavigate();
  console.log('Card.js')
  const { description,image, title,id } = product || {};

  const handleClick = () => {
    navigate('/getsingleitem/'+id);
  }

  return (
    <div onClick={handleClick}>
      <div className="card" style={{ width: '15rem' }}>
        <img src={'http://localhost:5000/'+image} className="card-img-top" alt="..." style={{height: '282px'}} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button href="#" className="btn btn-sm btn-dark">
           🤍 WISHLIST 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
