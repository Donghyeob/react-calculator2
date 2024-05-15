import { combineReducers } from 'redux';

import mainSlice from './main';

/**
 * Reducer? 상태 변화를 일으키는 함수
 * Reducer 는 이전 상태 `state`와 `action`을 받아 새로운 상태를 반환
 * rootReducer(state, action);
 *
 * `main slice`에서 `default`로 내보낸 리듀서를 가져옴
 */
const rootReducer = (state, action) => {
    const combinedReducer = combineReducers({
        main: mainSlice.reducer,
    });
    return combinedReducer(state, action);
};

export default rootReducer;
