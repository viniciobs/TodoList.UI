import React, { useEffect } from 'react';
import './style.css';

const LoadingSpinner = ({coverAllPage}) => {
    const setHeight = () => {
        let rootHeight = document.getElementById('root').offsetHeight;
        let headerHeight = document.getElementById('header').offsetHeight;

        let spinner = document.getElementById('loading-spinner');

        const padding = 60;

        spinner.style.height = rootHeight - headerHeight - padding + "px";
        spinner.style.top = headerHeight + padding + "px";
    }

    const setWidth = () => {
        let rootWidth = document.getElementById('root').offsetWidth;
        let navWidth = document.getElementById('nav-bar').offsetWidth;

        let spinner = document.getElementById('loading-spinner');

        spinner.style.width = rootWidth - navWidth + "px";
    }

    useEffect(() => {
        if (coverAllPage){
            let spinner = document.getElementById('loading-spinner');

            spinner.classList.add('cover');

            setHeight();
            setWidth();
        }
    },[]);

    return (
        <div id='loading-spinner'>
            <h5 className='text-center'>Please, wait...</h5>
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner;