import { combineReducers } from 'redux';

import mainSlice from './main';

const rootReducer = (state, action) => {
    const combinedReducer = combineReducers({
        main: mainSlice.reducer,
    });
    return combinedReducer(state, action);
};

export default rootReducer;
