'use client';
import React from "react";

const menu = [
  { name: "Dashboard", icon: "🏠" },
  { name: "Products", icon: "📦" },
  { name: "Orders", icon: "🧾" },
  { name: "Users", icon: "👤" },
];

export default function AdminDashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f6f8fa" }}>
      <aside style={{
        width: 220, background: "#fff", borderRight: "1px solid #eee", padding: 24
      }}>
        <h2 style={{ fontWeight: 700, marginBottom: 32 }}>Admin Panel</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menu.map((item) => (
              <li key={item.name} style={{ margin: "18px 0", fontWeight: 500 }}>
                <span style={{ marginRight: 12 }}>{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Dashboard</h1>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{
            background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001",
            padding: 24, flex: 1, minWidth: 200
          }}>
            <div style={{ fontSize: 18, color: "#888" }}>Total Products</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>120</div>
          </div>
          <div style={{
            background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001",
            padding: 24, flex: 1, minWidth: 200
          }}>
            <div style={{ fontSize: 18, color: "#888" }}>Total Orders</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>350</div>
          </div>
          <div style={{
            background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001",
            padding: 24, flex: 1, minWidth: 200
          }}>
            <div style={{ fontSize: 18, color: "#888" }}>Total Users</div>
            <div style={{ fontSize: 32, fontWeight: 700 }}>80</div>
          </div>
        </div>
        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Recent Orders</h2>
          <table style={{ width: "100%", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001", padding: 16 }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
                <th style={{ padding: 12 }}>Order ID</th>
                <th style={{ padding: 12 }}>Customer</th>
                <th style={{ padding: 12 }}>Total</th>
                <th style={{ padding: 12 }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>#1001</td>
                <td style={{ padding: 12 }}>John Doe</td>
                <td style={{ padding: 12 }}>$120.00</td>
                <td style={{ padding: 12 }}>Completed</td>
              </tr>
              <tr>
                <td style={{ padding: 12 }}>#1002</td>
                <td style={{ padding: 12 }}>Jane Smith</td>
                <td style={{ padding: 12 }}>$80.00</td>
                <td style={{ padding: 12 }}>Pending</td>
              </tr>
              <tr>
                <td style={{ padding: 12 }}>#1003</td>
                <td style={{ padding: 12 }}>Alice Lee</td>
                <td style={{ padding: 12 }}>$45.00</td>
                <td style={{ padding: 12 }}>Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}