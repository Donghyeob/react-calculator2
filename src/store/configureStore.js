import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        devTools: isDev,
    });

    return store;
};
const wrapper = createStore();

export default wrapper;
