import React from 'react';
import {useNavigate} from "react-router-dom";

const Navigator: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    };

    return (
        <div>
            <button onClick={handleNavigate}>Go to Home</button>
        </div>
    );
};


export default Navigator;
