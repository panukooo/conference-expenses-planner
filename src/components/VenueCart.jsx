import React from 'react';
import { useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity} from './VenueSlice';
import { useDispatch } from 'react-redux';
import './venueCart.css';

export const VenueCartBuilder = () => {
    let venueItems = useSelector(state => state.venues.venueItems);
    const dispatch = useDispatch()

    const handleQuantityIncrease = (payload) => {
        dispatch(increaseQuantity(payload));
    }

    const handleQuantityDecrease = (payload) => {
        if(payload.quantity -1 < 0) return;
        dispatch(decreaseQuantity(payload.id));
    }

    return(
        <div className="flex-venue-container">
        {venueItems.map(venue =>
            <article className="flex-venue-cart">
                <img src={venue.image} alt={venue.parraf}/>
                <p className='p-carts'>{venue.name}</p>
                <p className='p-carts'>Capacity: {venue.capacity}</p>
                <p className='p-carts'>${venue.price}</p>
                <span>
                    <button className="dec-btn" onClick={() => {handleQuantityDecrease({id: venue.id, quantity: venue.quantity})}}>-</button>
                    <span className="qty-span">{venue.quantity}</span>
                    <button className="inc-btn" onClick={() => {handleQuantityIncrease(venue.id)}}>+</button>
                </span>
            </article>
        )}
        </div>
    );
}


//export default VenueCartBuilder;