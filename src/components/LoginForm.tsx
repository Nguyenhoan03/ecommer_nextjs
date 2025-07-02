'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FetchData } from "@/utils/FetchData";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await FetchData<{ success?: boolean; message?: string }>({
        url: `${process.env.NEXT_PUBLIC_BACKEND}/login`,
        method: "POST",
        data: { email, password },
        headers: { "Content-Type": "application/json" },
      })
      if (response) {
        alert("Login successful!");
        window.location.href = "/";
      }

    } catch (err: any) {
      alert("Login failed! " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-box">
      <h2 className="login-title text-center mb-3">Login</h2>
      <p className="login-subtitle text-center mb-4">
        Please login using account detail below.
      </p>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control login-input"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
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
          <Link href="/register" className="login-create ms-1">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}