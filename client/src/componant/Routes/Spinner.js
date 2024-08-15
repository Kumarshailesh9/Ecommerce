import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';

const Spinner = ({path = 'login'}) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location =  useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

        if (count === 0) {
            navigate(`/${path}`, {
                state: { from: location.pathname }
            });
        }

        return () => clearInterval(interval);
    }, [count, navigate, location , path]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
            <h1 className='text-center'>Redirecting in {count} seconds</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
