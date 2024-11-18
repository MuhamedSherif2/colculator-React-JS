import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import "./style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Login";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App