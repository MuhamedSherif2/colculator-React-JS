import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [account, setAccount] = useState({
        username: '',
        email:'',
        password: '',
        phone:'',
    });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/signin',{state:account});
    };
    return (
        <div className='sign'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="username" placeholder='User Name' onChange={(e) => setAccount({...account,username:e.target.value})} required/>
                </div>
                <div>
                    <input type="email" placeholder='E-Mail' onChange={(e) => setAccount({...account,email:e.target.value})} required/>
                </div>
                <div>
                    <input type="text" placeholder='Phone Number' onChange={(e) => setAccount({...account,phone:e.target.value})}/>
                </div>
                <div>
                    <input type="password" placeholder='Enter Password' onChange={(e) => setAccount({...account,password:e.target.value})} required/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
