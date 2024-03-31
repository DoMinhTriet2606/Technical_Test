import React from "react";
import "../assets/css/components/header.css";

function Header() {
    return (
        <div className="header__container">
            <header className="header__content">
                <div className="image header-logo"></div>

                <div className="flex header-user">
                    <div className="flex user-info">
                        <i>Handcrafted by</i>
                        <p>Jim HSL</p>
                    </div>
                    <div className="image user-avatar"></div>
                </div>
            </header>
        </div>
    );
}

export default Header;
