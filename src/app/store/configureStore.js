import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        devTools: isDev,
    });
};

const wrapper = createStore();

export default wrapper;
