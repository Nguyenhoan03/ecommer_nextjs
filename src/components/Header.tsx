import React from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass, FaChevronDown, FaEnvelope, FaPhone, FaUser, FaHeart, FaCartShopping, FaBars } from "react-icons/fa6";

import "../styles/Header.scss"
const Header = () => {
  return (
  
      <header>
        <div className="top-bar d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center top-bar-content">
              <div className="col-md-6 d-flex align-items-center top-bar-left gap-3">
                <span><FaEnvelope /> mhhasanul@gmail.com</span>
                <span><FaPhone /> (12345)67890</span>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end align-items-center top-bar-right gap-3">
                <div className="dropdown">
                  <button className="dropdown-toggle text-white text-decoration-none d-flex align-items-center gap-1 bg-transparent border-0"
                    id="dropdownLanguage" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    English <FaChevronDown />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownLanguage">
                    <li><button className="dropdown-item">Vietnamese</button></li>
                    <li><button className="dropdown-item">Japan</button></li>
                    <li><button className="dropdown-item">Korea</button></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="dropdown-toggle text-white text-decoration-none d-flex align-items-center gap-1 bg-transparent border-0"
                    id="dropdownCurrency" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    USD <FaChevronDown />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownCurrency">
                    <li><button className="dropdown-item">VNĐ</button></li>
                    <li><button className="dropdown-item">Won</button></li>
                    <li><button className="dropdown-item">Man</button></li>
                  </ul>
                </div>
                <span><Link href="/login" style={{color:"white",textDecoration:'none'}}> <FaUser /> Login </Link></span>
                <span><FaHeart /> Wishlist</span>
                <span><FaCartShopping /></span>
              </div>
            </div>
          </div>
        </div>
        {/* Top bar mobile */}
        <div className="top-bar-mobile d-flex d-lg-none justify-content-between align-items-center px-3 py-1"
          style={{ background: "#a259d9", color: "#fff", fontSize: "15px" }}>
          <span><FaEnvelope /> nmh@gmail.com </span>
          <span className="span_phonenumber"><FaPhone /> (12345)67890</span>
          <div className="dropdown">
            <button className="dropdown-toggle bg-transparent border-0 text-white d-flex align-items-center gap-1"
              id="dropdownLanguageMobile" data-bs-toggle="dropdown" aria-expanded="false">
              English <FaChevronDown />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownLanguageMobile">
              <li><button className="dropdown-item">Vietnamese</button></li>
              <li><button className="dropdown-item">Japan</button></li>
              <li><button className="dropdown-item">Korea</button></li>
            </ul>
          </div>
          <span><FaHeart /> Wishlist</span>
          <span><FaCartShopping /></span>
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
                  <FaBars className="fs-2" />
                </button>
                {/* Logo center */}
                <div className="logo text-center flex-grow-1" style={{ fontSize: "2rem", fontWeight: "bold" }}>Hekto</div>
                {/* Icons right */}
                <div className="d-flex align-items-center gap-3 me-2">
                  <Link href="#" className="text-dark"><FaUser className="fs-4" /></Link>
                  <Link href="#" className="text-dark"><FaMagnifyingGlass className="fs-4" /></Link>
                </div>
              </div>
              {/* Desktop/tablet header */}
              <div className="col-6 col-lg-1 logo logo_desktop d-none d-lg-block">Hekto</div>
              <div className="col-12 col-lg-7 d-none d-md-block">
                <nav className="main-nav collapse d-lg-flex align-items-center gap-4" id="mainNavCollapse">
                  <div className="dropdown">
                    <Link href="#" className="active dropdown-toggle" id="dropdownHome" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Home <FaChevronDown />
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownHome">
                      <li><Link className="dropdown-item" href="/home.html">Home page</Link></li>
                      <li><Link className="dropdown-item" href="/shoplist.html">Shoplist</Link></li>
                      <li><Link className="dropdown-item" href="/productdetail.html">Product detail</Link></li>
                    </ul>
                  </div>
                  <Link href="#">Pages</Link>
                  <Link href="#">Products</Link>
                  <Link href="#">Blog</Link>
                  <Link href="#">Shop</Link>
                  <Link href="/contact.html">Contact</Link>
                </nav>
              </div>
              <div className="col-12 col-lg-3 search-box__icon d-none d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                <form className="search-box d-flex w-100">
                  <input type="text" className="form-control" placeholder=" " />
                  <button type="submit" className="btn">
                    <FaMagnifyingGlass />
                  </button>
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
              <div className="dropdown">
                <Link href="#" className="active dropdown-toggle" id="dropdownHome" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Home <FaChevronDown />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownHome">
                  <li><Link className="dropdown-item" href="/home.html">Home page</Link></li>
                  <li><Link className="dropdown-item" href="/shoplist.html">Shoplist</Link></li>
                  <li><Link className="dropdown-item" href="/productdetail.html">Product detail</Link></li>
                </ul>
              </div>
              <Link className="nav-link" href="#">Pages</Link>
              <Link className="nav-link" href="#">Products</Link>
              <Link className="nav-link" href="#">Blog</Link>
              <Link className="nav-link" href="#">Shop</Link>
              <Link className="nav-link" href="#">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
  
  );
};

export default Header;