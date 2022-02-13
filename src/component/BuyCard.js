import React from "react";

const BuyCard = (props) => {
  return (
    <div className=" my-4 mx-5 ">
      <div className="row ">
        <div className="col-md-4">
          <div className="card  " style={{ width: "18rem" }}>
            <img
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">Image Title</h5>
            <p className="card-text">
             image description
            </p>
            <hr />
            
            <p className="card-text">
              <small className="text-muted">productPrice:Rs.999</small>
            </p>
            <a href="#" className="btn btn-sm btn-dark">
           🤍 WISHLIST 
          </a>

          </div>
        </div>

      
      </div>
    </div>
  );
};
export default BuyCard;
