import React from 'react';
import "../styles/Header.scss"
const Header = () => {
  return (
    <div>
      <header>
        <div className="top-bar d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center top-bar-content">
              <div className="col-md-6 d-flex align-items-center top-bar-left gap-3">
                <span><i className="fa-regular fa-envelope"></i> mhhasanul@gmail.com</span>
                <span><i className="fa-solid fa-phone"></i> (12345)67890</span>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end align-items-center top-bar-right gap-3">
                <div className="dropdown">
                  <a className="dropdown-toggle text-white text-decoration-none d-flex align-items-center gap-1"
                    href="#" role="button" id="dropdownLanguage" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    English <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownLanguage">
                    <li><a className="dropdown-item" href="#">Vietnamese</a></li>
                    <li><a className="dropdown-item" href="#">Japan</a></li>
                    <li><a className="dropdown-item" href="#">Korea</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <a className="dropdown-toggle text-white text-decoration-none d-flex align-items-center gap-1"
                    href="#" role="button" id="dropdownCurrency" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    USD <i className="fa-solid fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownCurrency">
                    <li><a className="dropdown-item" href="#">VNĐ</a></li>
                    <li><a className="dropdown-item" href="#">Won</a></li>
                    <li><a className="dropdown-item" href="#">Man</a></li>
                  </ul>
                </div>
                <span><i className="fa-regular fa-user"></i> Login</span>
                <span><i className="fa-regular fa-heart"></i> Wishlist</span>
                <span><i className="fa-solid fa-cart-shopping"></i></span>
              </div>
            </div>
          </div>
        </div>
        {/* Top bar mobile */}
        <div className="top-bar-mobile d-flex d-lg-none justify-content-between align-items-center px-3 py-1"
          style={{ background: "#a259d9", color: "#fff", fontSize: "15px" }}>
          <span><i className="fa-regular fa-envelope"></i> nmh@gmail.com </span>
          <span className="span_phonenumber"><i className="fa-solid fa-phone"></i> (12345)67890</span>
          <span className="dropdown dropdown-toggle" id="dropdownLanguage" data-bs-toggle="dropdown"> English <i
            className="fa-solid fa-chevron-down"></i>
            <ul className="dropdown-menu" aria-labelledby="dropdownLanguage">
              <li><a className="dropdown-item" href="#">Vietnamese</a></li>
              <li><a className="dropdown-item" href="#">Japan</a></li>
              <li><a className="dropdown-item" href="#">Korea</a></li>
            </ul>
          </span>
          <span><i className="fa-regular fa-heart"></i> Wishlist</span>
          <span><i className="fa-solid fa-cart-shopping"></i></span>
        </div>
        {/* Nav bar */}
        <div className="nav-bar">
          <div className="container">
            <div className="row mobile_setting align-items-center nav-bar-content d-flex">
              {/* Mobile header */}
              <div className="d-flex mobile__header d-lg-none justify-content-between align-items-center py-2">
                {/* Hamburger left: mở offcanvas menu */}
                <button className="navbar-toggler border-0 bg-transparent p-0 ms-2" type="button"
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                  <span className="fa-solid fa-bars fs-2"></span>
                </button>
                {/* Logo center */}
                <div className="logo text-center flex-grow-1" style={{ fontSize: "2rem", fontWeight: "bold" }}>Hekto</div>
                {/* Icons right */}
                <div className="d-flex align-items-center gap-3 me-2">
                  <a href="#" className="text-dark"><i className="fa-regular fa-user fs-4"></i></a>
                  <a href="#" className="text-dark"><i className="fa-solid fa-magnifying-glass fs-4"></i></a>
                </div>
              </div>
              {/* Desktop/tablet header */}
              <div className="col-6 col-lg-1 logo logo_desktop d-none d-lg-block">Hekto</div>
              {/* <div className="col-6 d-lg-none text-end d-none d-md-block">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#mainNavCollapse" aria-controls="mainNavCollapse" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div> */}
              <div className="col-12 col-lg-7 d-none d-md-block">
                <nav className="main-nav collapse d-lg-flex align-items-center gap-4" id="mainNavCollapse">
                  <div className="dropdown">
                    <a href="#" className="active dropdown-toggle" id="dropdownHome" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Home <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownHome">
                      <li><a className="dropdown-item" href="./home.html">Home page</a></li>
                      <li><a className="dropdown-item" href="./shoplist.html">Shoplist</a></li>
                      <li><a className="dropdown-item" href="./productdetail.html">Product detail</a></li>
                    </ul>
                  </div>
                  <a href="#">Pages</a>
                  <a href="#">Products</a>
                  <a href="#">Blog</a>
                  <a href="#">Shop</a>
                  <a href="/contact.html">Contact</a>
                </nav>
              </div>
              <div className="col-12 col-lg-3 search-box__icon d-none d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                <form className="search-box d-flex w-100">
                  <input type="text" className="form-control" placeholder=" " />
                  <button type="submit" className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Offcanvas menu tab cho mobile */}
        <div className="offcanvas offcanvas-start text-white" tabIndex={-1} id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <nav className="nav flex-column gap-2">
              <a href="#" className="active dropdown-toggle" id="dropdownHome" data-bs-toggle="dropdown"
                aria-expanded="false">
                Home <i className="fa-solid fa-chevron-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownHome">
                <li><a className="dropdown-item" href="./home.html">Home page</a></li>
                <li><a className="dropdown-item" href="./shoplist.html">Shoplist</a></li>
                <li><a className="dropdown-item" href="./productdetail.html">Product detail</a></li>
              </ul>
              <a className="nav-link" href="#">Pages</a>
              <a className="nav-link" href="#">Products</a>
              <a className="nav-link" href="#">Blog</a>
              <a className="nav-link" href="#">Shop</a>
              <a className="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;