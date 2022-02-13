import React from 'react';
import Index from "../index"

function Card(props) {
  console.log('ewewr')
  return (
    <div>
      <div className="card" style={{ width: '15rem' }}>
        <img src={props.ImageUrl} className="card-img-top" alt="..." style={{height: '282px'}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.ImageDescrition}</p>
          <a href="#" className="btn btn-sm btn-dark">
           🤍 WISHLIST 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
