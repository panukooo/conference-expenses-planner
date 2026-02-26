import {createSlice} from '@reduxjs/toolkit';
import {addOnsData} from './planerData';

let initialState = {
    addOnsItems: addOnsData,
    totalAddOnsAmount: 0
};

let addOnsSlice = createSlice({
    name: 'addOns',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            let itemToIncrease = state.addOnsItems.find(item => item.id === action.payload);
            itemToIncrease.quantity += 1;
            itemToIncrease.totalItemAmount = itemToIncrease.quantity * itemToIncrease.price;
            state.totalAddOnsAmount += itemToIncrease.price;
        },
        decreaseQuantity: (state, action) => {
            let itemToDecrease = state.addOnsItems.find(item => item.id === action.payload);
            itemToDecrease.quantity -= 1;
            itemToDecrease.totalItemAmount = itemToDecrease.quantity * itemToDecrease.price;
            state.totalAddOnsAmount -= itemToDecrease.price;
        }
    }
});

export const {increaseQuantity, decreaseQuantity} = addOnsSlice.actions;
export default addOnsSlice.reducer;