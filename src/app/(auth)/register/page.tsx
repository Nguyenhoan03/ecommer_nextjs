'use client'
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/Login.scss";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gọi API đăng ký
    alert("Đăng ký thành công!");
  };

  return (
    <>
      <div className="banner-shoplist">
        <div className="banner-shoplist__content container align-items-center">
          <p className="banner-shoplist__title">Register</p>
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
                . Register
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="login-section d-flex align-items-center justify-content-center mt-5">
        <div className="login-box">
          <h2 className="login-title text-center mb-3">Register</h2>
          <p className="login-subtitle text-center mb-4">
            Please fill in the information below to create an account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control login-input"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control login-input"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control login-input"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control login-input"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="confirmPassword"
                className="form-control login-input"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-btn w-100 mb-3">
              Register
            </button>
            <div className="text-center login-bottom-text">
              Already have an account?
              <Link href="/(auth)/login" className="login-create ms-1">
                Login
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

export default RegisterPage;