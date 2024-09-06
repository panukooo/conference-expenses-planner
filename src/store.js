import { configureStore } from '@reduxjs/toolkit';
import venuesReducer from './components/VenueSlice';
import addOnsReducer from './components/AddOnsSlice';
import mealsReducer from './components/MealsSlice';

const store = configureStore({
    reducer: {
        venues: venuesReducer,
        addOns: addOnsReducer,
        meals: mealsReducer
    }
});

export default store;