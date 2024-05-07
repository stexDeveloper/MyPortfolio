import React from "react";
import Header from "../components/header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />

      <div className="main">{children}</div>
    </div>
  );
}
