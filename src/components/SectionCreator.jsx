import React from 'react';
import {VenueCartBuilder} from './VenueCart';
import {useSelector} from 'react-redux';
import './sectionCreator.css';
import {sectionData} from './planerData.js';
import AddOnsCartBuilder from './AddOnsCart';
import MealsCartBuilder from './MealsCart.jsx';

const SectionCreator = () => {
    let totalVenueAmount = useSelector(state => state.venues.totalVenueAmount);
    let totalAddOnsAmount = useSelector(state => state.addOns.totalAddOnsAmount);
    let totalMealsAmount = useSelector(state => state.meals.totalMealsAmount);

    console.log("section creator updates");
    return(
        <div className="sections-container">
            <section id={sectionData[0].id} className="venue-section">
                <h1 className="h1-section">{sectionData[0].name}</h1>
                <VenueCartBuilder />
                <p className="p-total-amount">Total Cost: ${totalVenueAmount}</p>
            </section>
            <section id={sectionData[1].id} className="venue-section">
                <h1 className="h1-section">{sectionData[1].name}</h1>
                <AddOnsCartBuilder />
                <p className="p-total-amount">Total Cost: ${totalAddOnsAmount}</p>
            </section>
            <section id={sectionData[2].id} className="venue-section">
                <h1 className="h1-section">{sectionData[2].name}</h1>
                <MealsCartBuilder />
                <p className="p-total-amount">Total Cost: ${totalMealsAmount}</p>
            </section>
        </div>
    );
}

export default SectionCreator;