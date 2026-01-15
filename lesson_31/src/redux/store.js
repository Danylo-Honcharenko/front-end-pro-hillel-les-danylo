import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "./todoSlice.js";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);