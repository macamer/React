import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Pag1 from "../pages/Pag1.tsx";
import Pag2 from "../pages/Pag2.tsx";
import Home from "../pages/Home.tsx";

function NotFound() {
    return null;
}

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pag1" element={<Pag1/>}/>
            <Route path="/pag2" element={<Pag2/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;