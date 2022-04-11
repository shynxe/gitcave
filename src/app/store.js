import {createStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from "../slices/rootReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: 'counter',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
