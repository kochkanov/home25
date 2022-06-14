import uiSlice from './reducers/uiSlice';
import formSlice from './reducers/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{
        cart: uiSlice.reducer,
        user: formSlice.reducer
    }
})



