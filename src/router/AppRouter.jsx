import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
 import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";
import { GlobalStyles } from "../components/globalStyles/GlobalStyled";

 

const AppRouter = () => {
  return (
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>

        <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About/>}/>
        </Route>
        <Route path="detail" element={<PrivateRouter/>}>
            <Route path="" element={<Detail/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;