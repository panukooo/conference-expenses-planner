import React from 'react';
import { useSelector } from 'react-redux';
import './showDetails.css';


const ShowDetails = (props) => {
    let addOns = useSelector(state => state.addOns.addOnsItems.filter(element => {
        if(element.quantity > 0) return element;
    }));

    let venues = useSelector(state => state.venues.venueItems.filter(element => {
        if(element.quantity > 0) return element;
    }));

    let meals = useSelector(state => state.meals.mealsItems.filter(element => {
        if(element.quantity > 0) return element;
    }));

    let itemsSelected = [...venues, ...addOns, ...meals];
    let totalEventAmount = itemsSelected.reduce((accumulator, item) => accumulator + item.totalItemAmount, 0);

    const handleNavigation = (isOn) => {
        props.handleNav(!isOn);
    }

    return(
        <article className="show-details-container">
            <h1>Total Cost For The Event</h1>
            <h1>${totalEventAmount}</h1>
            <table>
                    <thead>
                        <tr>
                            <th>Name</th> <th>Unit Cost</th> <th>Quantity</th> <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsSelected.map(( (element) => 
                            <tr>
                                <td>{element.name}</td> <td>{`$${element.price}`}</td> <td>{element.quantity}</td> <td>{element.totalItemAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <span><button className="details-btn" onClick={() => {handleNavigation(true)}}>OK</button></span>
        </article>
    );
}

export default ShowDetails;