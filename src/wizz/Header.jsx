import React from "react";
import { Link } from "react-router-dom";


function Header() {
        return (
            <nav className="nav">
                <div className="div">
                    <h2>wizz</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">log in</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/footer">About us</Link></li>
                    </ul>
                </div>
            </nav>
        )
}
export default Header