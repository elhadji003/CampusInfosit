import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Filieres from "../pages/Filieres";
import Layout from "../Layout/Layout";
import Blog from "../pages/Blog";
import About from "../pages/About";
import FiliereDetail from "../pages/filieres/FiliereDetail";

export default function AppNavigator() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/blog" element={<Blog />} />

        {/* filieres */}
        <Route path="/filiere/:id" element={<FiliereDetail />} />
      </Route>
    </Routes>
  );
}
