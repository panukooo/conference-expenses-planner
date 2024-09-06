import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from './AddOnsSlice';
import './addOnsCart.css';

const AddOnsCartBuilder = () => {
    let addOnsItems = useSelector(state => state.addOns.addOnsItems);
    const dispatch = useDispatch()


    const handleQuantityIncrease = (payload) => {
        dispatch(increaseQuantity(payload));
    }

    const handleQuantityDecrease = (payload) => {
        dispatch(decreaseQuantity(payload));
    }

    return(
        <div className="flex-addOn-container">
        {addOnsItems.map(addOn =>
            <article className="flex-addOn-cart">
                <img src={addOn.image} alt={addOn.parraf}/>
                <p>{addOn.name}</p>
                <p>${addOn.price} ea.</p>
                <span>
                    <button className="dec-btn" onClick={() => {handleQuantityDecrease(addOn.id)}}>-</button>
                    <span className="qty-span">{addOn.quantity}</span>
                    <button className="inc-btn" onClick={() => {handleQuantityIncrease(addOn.id)}}>+</button>
                </span>
            </article>
        )}
        </div>
    );
}

export default AddOnsCartBuilder;