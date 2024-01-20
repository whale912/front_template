import React from "react";
import '../../../styles/main.css'
import TabHeader from "./TabHeader";
import {Route, Routes} from "react-router-dom";
import Menu1 from "../menu/Menu1";
import Menu2 from "../menu/Menu2";

const Main = () => {
    return (
        <div className="main-layout">
            <TabHeader/>
            <div className="main-wrapper">
                <Routes>
                    <Route exact path="/" element={<Menu1/>}/>
                    <Route path="/menu1" element={<Menu1/>}/>
                    <Route path="/menu2" element={<Menu2/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default Main;