import React, { useState } from 'react';

function Navbar({ products, setProducts }) {
  const [fileterKeyword, setFilterKeyword] = useState();

  const findData = (e) => {
    e.preventDefault();
    console.log('seeeee', fileterKeyword);

    const newProduct = products.filter((item) => item.title === fileterKeyword);
    setProducts(newProduct);
    console.log('new pro', newProduct);
  };

  return (
    <div>
      <nav className="navbar    navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={require('../assect/logo.jpeg')}
              alt=""
              width="30"
              height="24"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WOMEN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME & LIVING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BEAUTY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  STUDIO
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setFilterKeyword(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: 'white' }}
                onClick={findData}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
