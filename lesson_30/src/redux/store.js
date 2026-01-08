import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from './swapiSlice.js';

export default configureStore({
    reducer: {
        swapi: swapiReducer
    }
})