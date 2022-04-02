import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Home from "../src/components/Home/Home.jsx";
import Videos from "../src/components/Videos/Videos.jsx";
import Login from "../src/components/Login/Login.jsx";
import BlogDetails from "../src/components/BlogDetails/BlogDetails.jsx";
import NotFound from "../src//components/NotFound/NotFound";

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blog/:id" element={<BlogDetails />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
