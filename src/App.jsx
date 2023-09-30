import React from "react";
import {BrowseRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";
import Login from './Login';
function App () {
    return (
        <BrowseRouter> 
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/register' element = {<Register/>}></Route>
            <Route path = '/login' element = {<Login/>}></Route>
        </Routes>
        </BrowseRouter>
    )
}