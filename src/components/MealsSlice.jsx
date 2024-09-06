import {createSlice} from '@reduxjs/toolkit';
import { mealsData } from './planerData';

let initialState = {
    mealsItems: mealsData,
    totalMealsAmount: 0
}

let mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        setQuantity: (state, action) => {
            let itemToIncrease = state.mealsItems.find(item => item.id === action.payload.id);
            itemToIncrease.quantity = action.payload.quantity;
            state.totalMealsAmount = state.mealsItems.reduce((accumulator, meal) => accumulator + meal.quantity * meal.price, 0);
        }
    }
})


export const { setQuantity } = mealsSlice.actions;
export default mealsSlice.reducer;