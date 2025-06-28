import React from "react";
import Link from "next/link";
import "@/styles/Login.scss"
const LoginPage = () => {
  return (
    <>
      <div className="banner-shoplist">
        <div className="banner-shoplist__content container align-items-center">
          <p className="banner-shoplist__title">My Account</p>
          <ul className="d-flex gap-2 text-align-start">
            <li>
              <Link href="/" style={{ color: "black", fontFamily: "Lato", fontSize: 16 }}>
                Home
              </Link>
            </li>
            <li>
              <span style={{ color: "black", fontFamily: "Lato", fontSize: 16 }}>. Page</span>
            </li>
            <li>
              <Link href="/shoplist" className="breadcrumb-link">
                . My Account
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="login-section d-flex align-items-center justify-content-center mt-5">
        <div className="login-box">
          <h2 className="login-title text-center mb-3">Login</h2>
          <p className="login-subtitle text-center mb-4">
            Please login using account detail below.
          </p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control login-input"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control login-input"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <Link href="#" className="login-forgot">
                Forgot your password?
              </Link>
            </div>
            <button type="submit" className="login-btn w-100 mb-3">
              Sign In
            </button>
            <div className="text-center login-bottom-text">
              Don’t have an Account?
              <Link href="#" className="login-create ms-1">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </section>

      <section className="fade-right reveal brand mt-5 mb-5">
        <div
          className="brand-logos d-flex justify-content-between align-items-center my-5"
          style={{ width: "85%", margin: "auto" }}
        >
          <a href="https://fashionlive.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153723.png"
              alt="Fashion Live"
              className="brand-logo img-fluid"
            />
          </a>
          <a href="https://handcrafted.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153816.png"
              alt="Hand Crafted"
              className="brand-logo img-fluid"
            />
          </a>
          <a href="https://mestonix.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153833.png"
              alt="Mestonix"
              className="brand-logo img-fluid"
            />
          </a>
          <a href="https://sunshine.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153852.png"
              alt="Sunshine"
              className="brand-logo img-fluid"
            />
          </a>
          <a href="https://pure.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153911.png"
              alt="Pure"
              className="brand-logo img-fluid"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default LoginPage;