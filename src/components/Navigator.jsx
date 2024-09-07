import {React, useState } from 'react';
import './navigator.css';
import ShowDetails from './ShowDetails';
import './showDetails.css';

const Navigator = (props) => {
    let [isOnProductsPage, setIsInProductsPage] = useState(true);

    const handleNavigation = (isOn) => {
        setIsInProductsPage(!isOn);
    }

    return(
        <header>
            <nav className="flex-nav">
                <h1 className="flex-header" onClick={() => {props.handleNav(false)}}>Conference Planer</h1>
                <ul className="flex-list">
                    <li><a href="#venue-section">Venue</a></li>
                    <li><a href="#add-ons-section">Add-Ons</a></li>
                    <li><a href="#meals-section">Meals</a></li>
                </ul>
                <span className="flex-span">
                    <button className="nav-button" onClick={() => {handleNavigation(true)}}>Show Details</button>
                </span>
            </nav>
            <div className={`${isOnProductsPage ? "hide-details" : "show-details"}`}>
                <ShowDetails handleNav = {handleNavigation}/>
            </div>
        </header>
    );
}

export default Navigator;