import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Importe ta Navbar améliorée
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />={" "}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
