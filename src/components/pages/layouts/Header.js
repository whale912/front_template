import React from "react";
import '../../../styles/header.css'

import Profile from './Profile'

const Header = () => {
    return (
        <div className="header-bar">
            <div className="header-logo"></div>
            <div className="header-center"></div>
            <div className="header-profile">
                <Profile/>
            </div>
        </div>
    )
}

export default Header;