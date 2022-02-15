import React from 'react';
import './style.css';

const LoadingSpinner = () => {
    return (
        <div className="loading d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
               <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default LoadingSpinner;