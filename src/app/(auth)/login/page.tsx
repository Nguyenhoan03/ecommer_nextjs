import React from "react";
import Link from "next/link";
import "@/styles/Login.scss"
import LoginForm from "@/components/LoginForm";
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
        <LoginForm />
      </section>

      <section className="fade-right reveal brand mt-5 mb-5">
        <div
          className="brand-logos d-flex justify-content-between align-items-center my-5"
          style={{ width: "85%", margin: "auto" }}
        >
          <Link href="https://fashionlive.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153723.png"
              alt="Fashion Live"
              className="brand-logo img-fluid"
            />
          </Link>
          <Link href="https://handcrafted.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153816.png"
              alt="Hand Crafted"
              className="brand-logo img-fluid"
            />
          </Link>
          <Link href="https://mestonix.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153833.png"
              alt="Mestonix"
              className="brand-logo img-fluid"
            />
          </Link>
          <Link href="https://sunshine.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153852.png"
              alt="Sunshine"
              className="brand-logo img-fluid"
            />
          </Link>
          <Link href="https://pure.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/uploads/Screenshot 2025-05-20 153911.png"
              alt="Pure"
              className="brand-logo img-fluid"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginPage;