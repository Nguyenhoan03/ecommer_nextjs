'use client';
import React from "react";

const users = [
  { id: 1, name: "Nguyen Van A", email: "a@example.com", phone: "0901234567" },
  // ...fetch từ API thực tế
];

export default function UsersPage() {
  return (
    <div>
      <h1>Quản lý người dùng</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}