import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Signin from './Signin'
import Signup from './Signup'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default App
