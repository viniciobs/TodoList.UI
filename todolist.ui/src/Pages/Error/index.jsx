import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import './style.css';

const Error = () => {
    return (
        <>
            <div id="error">
                <div className="error">
                    <div className="error-title">
                        <h1>Oops</h1>
                    </div>
                    <h2>We are sorry!</h2>
                    <p>An error occurred. Try again and if the problem persists contact us.</p>
                    <Link to="/" className="btn btn-primary">Back to homepage</Link>
                </div>
            </div>
        </>
    )
}

export default Error;