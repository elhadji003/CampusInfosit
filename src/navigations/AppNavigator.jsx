import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Filieres from "../pages/Filieres";
import Layout from "../Layout/Layout";
import Blog from "../pages/Blog";
import About from "../pages/About";
import FiliereDetail from "../pages/filieres/FiliereDetail";
import Contact from "../pages/Contact";
import Alumni from "../pages/Alumni";
import Administration from "../pages/Administration";

export default function AppNavigator() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/filieres" element={<Filieres />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/filiere/:id" element={<FiliereDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />

        {/* filieres */}
      </Route>
    </Routes>
  );
}
