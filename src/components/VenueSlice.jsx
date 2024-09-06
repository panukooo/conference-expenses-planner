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
            state.totalVenueAmount += itemToIncrease.price;
            console.log(state.totalVenueAmount);
        },
        decreaseQuantity: (state, action) => {
            let itemToDecrease = state.venueItems.find(item => item.id === action.payload);
            itemToDecrease.quantity -= 1;
            state.totalVenueAmount -= itemToDecrease.price;
            console.log(state.totalVenueAmount);

        }
    } 
});

export const {increaseQuantity, decreaseQuantity} = VenueSlice.actions;
export default VenueSlice.reducer;