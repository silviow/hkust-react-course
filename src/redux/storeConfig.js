import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const storeConfig = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};