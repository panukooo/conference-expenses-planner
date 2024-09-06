import React from 'react';
import './navigator.css';

const Navigator = (props) => {
    return(
        <header>
            <nav className="flex-nav">
                <h1 className="flex-header" onClick={() => {props.handleNav(false)}}>Conference Planer</h1>
                <ul className="flex-list">
                    <li><a href="#venue-section">Venue</a></li>
                    <li><a href="#add-ons-section">Add-Ons</a></li>
                    <li><a href="#meals-section">Meals</a></li>
                </ul>
                <span className="flex-span"><button className="nav-button">Show Details</button></span>
            </nav>
        </header>
    );
}

export default Navigator;