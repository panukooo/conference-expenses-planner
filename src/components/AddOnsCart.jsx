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
        if(payload.quantity - 1 < 0) return;
        dispatch(decreaseQuantity(payload.id));
    }

    return(
        <div className="flex-addOn-container">
        {addOnsItems.map(addOn =>
            <article className="flex-addOn-cart">
                <img src={addOn.image} alt={addOn.parraf}/>
                <p className='p-carts'>{addOn.name}</p>
                <p className='p-carts'>${addOn.price} ea.</p>
                <span>
                    <button className="dec-btn" onClick={() => {handleQuantityDecrease({id: addOn.id, quantity: addOn.quantity})}}>-</button>
                    <span className="qty-span">{addOn.quantity}</span>
                    <button className="inc-btn" onClick={() => {handleQuantityIncrease(addOn.id)}}>+</button>
                </span>
            </article>
        )}
        </div>
    );
}

export default AddOnsCartBuilder;