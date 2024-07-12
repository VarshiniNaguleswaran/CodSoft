import React from 'react';
import { useNavigate } from "react-router-dom";


export default function Home() {
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
        <div className="homebody">
            <div className="navbar">
                <div className="navItem" onClick={handleHome}>HOME</div>
                <div className="navItem" onClick={handleLogin}>LOGIN</div>
                <div className="navItem" onClick={handleSignin}>SIGNIN</div>
            </div>

            <div className="homeIntro">
                <div className="homeIntro-black">
                    <h1 className="homeIntroh1">Welcome to Our Blog!</h1>
                    <p className="homeIntroPara">Whether you're here to share your passions, insights, or stories, your journey as a blog creator begins now. Explore, write, and inspire with your unique voice. We're excited to see what you create!</p>
                </div>
                <div className="homeIntro-home"></div>
            </div>

            <div className="blogImages">
                <div className="blogRow">
                    <div className="blog1"></div>
                    <div className="blog2"></div>
                    <div className="blog3"></div>
                </div>
               
                <div className="blogRow">
                    <div className="blog4"></div>
                    <div className="blog5"></div>
                    <div className="blog6"></div>
                </div>
            </div>
        </div>
    );
}
