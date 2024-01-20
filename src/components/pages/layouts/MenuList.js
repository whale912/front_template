import React, {useState} from "react";
import '../../../styles/menu.css'
import {Link} from "react-router-dom";


const MenuList = () => {

    return (
        <div className="menu-wrap">
            <ul className="menu-list">
                <Link to="/menu1"><li className="menu-li menu1">메뉴1</li></Link>
                <Link to="/menu2"><li className="menu-li menu2" >메뉴2</li></Link>
                <Link to="/"><li className="menu-li menu3">메뉴3</li></Link>
            </ul>
        </div>
    )
}

export default MenuList;