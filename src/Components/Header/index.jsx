import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import "./index.css";
import {Link} from "react-router"
const Header = () => {

    const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login',{replace: true});
    }

    return (
        <div className="header-container">
            <div className="header-logo-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                    alt="website logo"
                    className="header-logo"
                />
                
            </div>
            <ul className="header-nav">
                <Link to="/"><li className="header-nav-item">Home</li></Link>
                <Link to="/jobs"> <li className="header-nav-item">Jobs</li></Link>
               
            </ul>
            <button className="logout-button" onClick={onClickLogout}>Logout</button>
        </div>
    );
};

export default Header;