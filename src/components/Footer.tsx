import React from 'react'
import "../styles/Footer.scss"

const Footer = () => {
  return (
      <footer className="bg-light text-secondary mt-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-md-4">
                    <h3 className="h4 fw-bold mb-3 text-dark">Hekto</h3>
                    <div className="mb-4">
                        <p className="mb-2">Đăng ký nhận tin:</p>
                        <div className="input-group">
                            <input type="email" placeholder="Enter Email Address" className="form-control" />
                            <button className="btn text-white" style={{backgroundColor: "#FF1B6A"}}>Sign Up</button>
                        </div>
                    </div>
                    <div>
                        <p className="fw-semibold">Contact Info</p>
                        <p className="small">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <h4 className="h6 fw-semibold mb-3 text-dark">Categories</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Laptops & Computers</a>
                        </li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Cameras &
                                Photography</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Smart Phones &
                                Tablets</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Video Games &
                                Consoles</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Waterproof
                                Headphones</a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-3">
                    <h4 className="h6 fw-semibold mb-3 text-dark">Customer Care</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">My Account</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Discount</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Returns</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Orders History</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Order Tracking</a></li>
                    </ul>
                </div>


                <div className="col-12 col-md-3">
                    <h4 className="h6 fw-semibold mb-3 text-dark">Pages</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Browse the Shop</a>
                        </li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Category</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Pre-Built Pages</a>
                        </li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">Visual Composer
                                Elements</a></li>
                        <li className="mb-2"><a href="#" className="text-decoration-none text-secondary">WooCommerce Pages</a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <p className="footer-text">&copy; Webecy - All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
