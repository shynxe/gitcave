import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducer from "../slices/rootReducer";
import {persistReducer, persistStore} from "redux-persist";


const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
});
export const persistor = persistStore(store);
