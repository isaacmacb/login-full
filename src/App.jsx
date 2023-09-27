import React from "react";
import {BrowseRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Register from "./Register";

function App () {
    return (
        <BrowseRouter> 
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/register' element = {<Register/>}></Route>
        </Routes>
        </BrowseRouter>
    )
}