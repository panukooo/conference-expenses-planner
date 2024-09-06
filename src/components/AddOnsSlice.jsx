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
            state.totalAddOnsAmount += itemToIncrease.price;
            console.log(state.totalVenueAmount);
        },
        decreaseQuantity: (state, action) => {
            let itemToDecrease = state.addOnsItems.find(item => item.id === action.payload);
            itemToDecrease.quantity -= 1;
            state.totalAddOnsAmount -= itemToDecrease.price;
            console.log(state.totalVenueAmount);

        }
    }
});

export const {increaseQuantity, decreaseQuantity} = addOnsSlice.actions;
export default addOnsSlice.reducer;