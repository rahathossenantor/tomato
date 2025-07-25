import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="Logo" className="logo" />
            <ul className="navbar_menu">
                <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
                <li className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
                <li className={menu === "Services" ? "active" : ""} onClick={() => setMenu("Services")}>Services</li>
                <li className={menu === "Contact" ? "active" : ""} onClick={() => setMenu("Contact")}>Contact</li>
            </ul>

            <div className="navbar_right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar_search_icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
