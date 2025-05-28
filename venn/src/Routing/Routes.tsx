import React from 'react';
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import MainPage from '../Pages/ViewResource/MainPage';
import Login from '../Pages/Login/Login';
import Setting from '../Pages/Setting/Setting';


function Routing() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/MainPage" element={<MainPage />} />
                    <Route path ="/Settings" element={<Setting/>}/>
                </Routes>
            
        </>
    );
}

export default Routing