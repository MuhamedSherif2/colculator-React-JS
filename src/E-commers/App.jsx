import React from 'react'
import Home from './Home'
import Header from '../wizz/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App
