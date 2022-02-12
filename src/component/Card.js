import React, { Component } from "react";


class Card extends Component {
    
  render() {
        //here array distructring

    let {title,ImageUrl,ImageDescrition}=this.props;

    return (
      <div>
      
        <div className="card" style={{width:'15rem'}} >
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {ImageDescrition}
            </p>
            <a href="#" className="btn btn-sm btn-dark">
              WISHLIST
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
