import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const mainSlice = createSlice({
    // @TODO 유정 state 관리
    name: 'main',
    initialState,
    reducers: {},
    extraReducers: builder => builder.addDefaultCase(state => state),
});

export default mainSlice;
