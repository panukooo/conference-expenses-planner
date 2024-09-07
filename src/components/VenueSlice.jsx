import {venueData} from './planerData';
//import venueArr from './planerData';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //venueItems: venueArr,
    venueItems: venueData,
    totalVenueAmount: 0,
};

const VenueSlice = createSlice({
    name: 'venues',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            let itemToIncrease = state.venueItems.find(item => item.id === action.payload);
            itemToIncrease.quantity += 1;
            itemToIncrease.totalItemAmount = itemToIncrease.quantity * itemToIncrease.price;
            state.totalAddOnsAmount += itemToIncrease.price;
        },
        decreaseQuantity: (state, action) => {
            let itemToDecrease = state.venueItems.find(item => item.id === action.payload);
            itemToDecrease.quantity -= 1;
            itemToDecrease.totalItemAmount = itemToDecrease.quantity * itemToDecrease.price;
            state.totalAddOnsAmount -= itemToDecrease.price;
        }
    } 
});

export const {increaseQuantity, decreaseQuantity} = VenueSlice.actions;
export default VenueSlice.reducer;