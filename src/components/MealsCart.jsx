import { React, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setQuantity} from './MealsSlice';
import './mealsCart.css';

const MealCartBuilder = () => {
    let mealsItems = useSelector(state => state.meals.mealsItems);
    let dispatch = useDispatch();

    const handleSetQuantity = (payload) => {
        if(payload.quantity < 0) return;
        dispatch(setQuantity(payload));
    }

    return(
        <div className="flex-meal-container">
        {mealsItems.map(meal =>
            <article className="flex-meal-cart">
                <img src={meal.image} alt={meal.name}/>
                <p className='p-carts'>{meal.name}</p>
                <p className='p-carts'>${meal.price}</p>
                <span>
                    <label htmlFor="persons">Number of Persons</label>
                    <br />
                    <input id="persons" type="number" value={meal.quantity} onChange={(e) => handleSetQuantity({id: meal.id, quantity: e.target.value})} />
                </span>
            </article>
        )}
        </div>
    );
}

export default MealCartBuilder;