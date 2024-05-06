import { createSlice } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';

export const initialState = {
    scanValue: '',
    result: null,
};

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

export const mainActions = mainSlice.actions;
export default mainSlice;
