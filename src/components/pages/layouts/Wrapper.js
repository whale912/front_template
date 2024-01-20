import React from "react";
import '../../../styles/wrapper.css';
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";


const Wrapper = () => {

    return (
        <div className="wrap-div">
            <Header/>
            <Menu/>
            <Main/>
        </div>
    )
};


export default Wrapper;