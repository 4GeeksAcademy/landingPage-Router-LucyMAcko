import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home.jsx';
import LogIn from './pages/login.jsx';
import AboutUs from './pages/aboutus.jsx';
import NoPage from './pages/nopage.jsx';

const Router = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Home />} path="/home" />
                    <Route element={<LogIn />} path="/login" />
                    <Route element={<AboutUs />} path="/about-us" />
                    <Route element={<NoPage />} path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router