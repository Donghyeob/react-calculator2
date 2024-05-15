import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

const isDev = process.env.NODE_ENV === 'development';

/**
 * `Redux toolkit`에서 제공하는 함수로 `Redux store`를 구성 후 반환
 * configureStore({reducer, middleware, devTools})
 *
 * Redux store
 * 1. 상태 저장, 2. 리듀서 적용, 3. subscribe & action dispatch
 */
const createStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
        devTools: isDev,
    });
};

const wrapper = createStore();

export default wrapper;
