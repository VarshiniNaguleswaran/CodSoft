import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Signin() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSignin = () => {
        navigate('/signin');
    }

    return (
        <div className="registerContainer">
            <div className="navbar">
                <div className="navItem" onClick={handleHome}>HOME</div>
                <div className="navItem" onClick={handleLogin}>LOGIN</div>
                <div className="navItem" onClick={handleSignin}>SIGNIN</div>
            </div>
            <div className="registerForm">
                <form>
                    <h1>Register</h1>
                    <label>Username:</label>
                    <input type="text" className="username" /><br />
                    <label>Password:</label>
                    <input type="password" className="password" /><br />
                    <label>Confirm Password:</label>
                    <input type="password" className="confirmPassword" /><br />
                    <input type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
}
