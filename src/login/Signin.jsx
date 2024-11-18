import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [users, setUser] = useState({
        email: '',
        password: '',
    });
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.email == location.state.email && location.state.password == users.password) {
            alert("login successful")
            navigate('/');
        } else {
            alert("E-mail or Password is Wrong");
        }
    };
    return (
        <div className='sign'>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" placeholder='E-Mail' onChange={(e) => setUser({ ...users, email: e.target.value })} required />
                </div>
                <div>
                    <input type="password" placeholder='Enter Password' onChange={(e) => setUser({ ...users, password: e.target.value })} required />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
