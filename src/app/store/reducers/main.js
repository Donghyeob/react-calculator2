import { createSlice } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';

/**
 * `slice`의 초기 상태
 */
export const initialState = {
    scanValue: '',
    result: null,
};

/**
 * createSlice({이름, 초기상태, 리듀서, 미들웨어})
 * reducers: `slice`의 액션과 그에 따른 상태 변경을 정의
 */
const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setScanValue: (state, action) => {
            state.scanValue = action.payload;
        },
        addButtonValue: (state, action) => {
            state.scanValue += action.payload;
        },
        deleteButtonValue: state => {
            state.scanValue = state.scanValue.slice(0, -1);
        },
        reset: state => {
            state.scanValue = '';
            state.result = null;
        },
        getResult: state => {
            state.result = evaluate(state.scanValue);
        },
    },
    extraReducers: builder => builder.addDefaultCase(state => state),
});

export default mainSlice;
